<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Auth;
use App\Models\User;
use App\Models\Pasien;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $username = trim($request->input('username'));
        $password = trim($request->input('password'));

        // Check if user is exist
        $user = User::where('username', $username)->first();

        if (!$user) {
            return response()->json([
                'status' => 0,
                'message' => 'Ooopps! Data Tidak Ditemukan'
            ]);
        } else {
            // Check if user is in active
            if ($user->is_active != 'y') {
                return response()->json([
                    'status' => 0,
                    'message' => 'Ooopps! Status User Tidak Aktif'
                ]);
            } else {

                // Auth by username & password
                if (Auth::attempt(['username' => $username, 'password' => $password], true)) {

                    $user->detail;

                    // $user->save();

                    $data = [
                        'status' => 1,
                        'message' => 'Berhasil masuk ke Aplikasi',
                        'token' => $user->createToken('RS_MEDINA_' . strtoupper($user->user_type))->accessToken,
                        'user_type' => $user->user_type,
                        'user' => $user,
                    ];

                    return response()->json($data);
                } else {
                    $data = [
                        'status' => 0,
                        'message' => 'Password Salah'
                    ];

                    return response()->json($data);
                }
            }
        }
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'no_hp' => 'required|unique:users,username',
            'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:6'
        ], [
            'nama.required' => 'Nama harus diisi',
            'no_hp.unique' => 'Nomor Handphone sudah digunakan',
            'password.required' => 'Password Harus Diisi',
        ]);


        if ($validator->passes()) {
            $user = new User;
            $user->username = $request->no_hp;
            $user->user_type = 'pasien';
            $user->password = bcrypt($request->password);

            if ($user->save()) {

                $pasien = Pasien::firstOrNew(['no_hp' => $request->no_hp]);
                $pasien->user_id = $user->id;
                $pasien->nama = $request->nama;
                $pasien->no_hp = $request->no_hp;

                if ($pasien->save()) {

                    $username = $user->username;
                    $password = $request->password;

                    if (Auth::attempt(['username' => $username, 'password' => $password], true)) {

                        $user->detail;

                        // $user->save();

                        $data = [
                            'status' => 1,
                            'message' => 'Berhasil masuk ke Aplikasi',
                            'token' => $user->createToken('RS_MEDINA_' . strtoupper($user->user_type))->accessToken,
                            'user_type' => $user->user_type,
                            'user' => $user,
                        ];

                        return response()->json($data);
                    }
                }
            }
        } else {
            return response()->json([
                'status' => 0,
                'message' => 'Gagal Tambah Guru',
                'data' => $validator->errors()->all()
            ]);
        }
    }

    public function logout()
    {

        $user = Auth::user();

        $user_data = User::findOrFail($user->id);

        $user_data->status = 'offline';
        $user_data->save();

        $user->token();
        $user->revoke();

        return response()->json([
            'status' => 'success',
            'msg' => 'Berhasil keluar Aplikasi.'
        ], 200);
    }


    public function user()
    {
        $user_auth = auth()->user();
        $id = $user_auth->id;

        $user = User::find($id);

        $data = [
            'status' => 1,
            'user' => $user,
            'detail' => $user->detail,
            'user_type' => $user->user_type,
        ];

        return response()->json($data);
    }
}