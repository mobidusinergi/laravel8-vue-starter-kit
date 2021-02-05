<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Pasien;
use App\Models\Apoteker;
use App\Models\FrontOffice as FO;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createFO();
        $this->createApoteker();
    }

    private function createFO()
    {
        $username = 'fo1';
        $password = 'fo1';
        $email = 'fo1@gmail.com';
        $no_hp = '082144241412';
        $nama = 'Front Office 1';

        $user = User::firstOrNew(['username' => $username]);
        $user->user_type = 'frontoffice';
        $user->username = $username;
        $user->password = bcrypt($password);

        if($user->save())
        {
            $fo = FO::firstOrNew(['user_id' => $user->id]);
            $fo->user_id = $user->id;
            $fo->nama = $nama;
            $fo->no_hp = $no_hp;
            $fo->email = $email;

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

    private function createApoteker()
    {
        $username = 'apoteker1';
        $password = 'apoteker1';
        $email = 'apoteker1@gmail.com';
        $no_hp = '0821441231412';
        $nama = 'Apoteker 1';

        $user = User::firstOrNew(['username' => $username]);
        $user->user_type = 'apoteker';
        $user->username = $username;
        $user->password = bcrypt($password);

        if ($user->save()) {
            $apoteker = Apoteker::firstOrNew(['user_id' => $user->id]);
            $apoteker->user_id = $user->id;
            $apoteker->nama = $nama;
            $apoteker->no_hp = $no_hp;
            $apoteker->email = $email;

            if ($apoteker->save()) {
                return response()->json([
                    'status' => 1,
                    'message' => 'Berhasil menambahkan Pengguna Front Office ' . $apoteker->nama,
                    'data' => []
                ]);
            }
        }
    }
}
