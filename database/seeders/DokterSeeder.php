<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Dokter;

class DokterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $user = User::where('user_type', 'dokter')->delete();

        $data = [
            [
                'username' => 'dokter1',
                'password' => 'dokter1',
                'avatar' => 'blank-user.jpg',
                'nama' => 'Prof. Dr.Tjahjono',
                'tempat_lahir' => 'Jakarta',
                'tanggal_lahir' => '1969-02-04',
                'alamat' => 'Menteng, Kebayoran Baru',
                'nip' => '320505090996004',
                'nik' => '320505090996004',
                'tariff_chat' => '50000',
                'tariff_videocall' => '100000',
                'no_hp' => '08121494007',
                'email' => 'dokter1@gmail.com',
            ],
            [
                'username' => 'dokter2',
                'password' => 'dokter2',
                'avatar' => 'blank-user.jpg',
                'nama' => 'Prof. Budi',
                'tempat_lahir' => 'Jakarta',
                'tanggal_lahir' => '1969-02-04',
                'alamat' => 'Menteng, Kebayoran Baru',
                'nip' => '320505090996003',
                'nik' => '320505090996003',
                'tariff_chat' => '50000',
                'tariff_videocall' => '100000',
                'no_hp' => '08121124007',
                'email' => 'dokter2@gmail.com',
            ],
        ];

        for($i = 0; $i < count($data); $i++)
        {
            $user = User::firstOrNew(['username' => $data[$i]['username']]);
            $user->user_type = 'dokter';
            $user->is_active = 'y';
            $user->avatar = $data[$i]['avatar'];
            $user->username = $data[$i]['username'];
            $user->password = bcrypt($data[$i]['password']);

            if($user->save())
            {
                $fo = Dokter::firstOrNew(['user_id' => $user->id]);
                $fo->user_id = $user->id;
                $fo->nama = $data[$i]['nama'];
                $fo->no_hp = $data[$i]['no_hp'];
                $fo->alamat = $data[$i]['alamat'];
                $fo->email = $data[$i]['email'];
                $fo->nip = $data[$i]['nip'];
                $fo->nik = $data[$i]['nik'];
                $fo->tariff_chat = $data[$i]['tariff_chat'];
                $fo->tariff_videocall = $data[$i]['tariff_videocall'];
                $fo->tempat_lahir = $data[$i]['tempat_lahir'];
                $fo->tanggal_lahir = $data[$i]['tanggal_lahir'];

                if($fo->save())
                {
                    return response()->json([
                        'status' => 1,
                        'message' => 'Berhasil menambahkan Pengguna Front Office ' . $fo->nama,
                        'data' => []
                    ]);
                }
            }
        }
    }
}
