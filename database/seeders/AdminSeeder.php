<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Admin;
use App\Models\Pasien;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $user = User::where('username', 'admin')->delete();
        $user = User::where('username', 'secret')->delete();
        $user = User::where('username', '08121494007')->delete();

        $user = new User;
        $user->username = 'secret';
        $user->password = bcrypt('tahun2020@');
        $user->is_active = 'y';
        $user->user_type = 'admin';
        
        if($user->save())
        {
            
            $admin = new Admin;
            $admin->nama = 'Maintenance Only';
            $admin->user_id = $user->id;
            $admin->save();
        }

        $user = new User;
        $user->username = 'admin';
        $user->password = bcrypt('admin');
        $user->is_active = 'y';
        $user->user_type = 'admin';
        
        if($user->save())
        {
            
            $admin = new Admin;
            $admin->nama = 'Maintenance Only';
            $admin->user_id = $user->id;
            $admin->save();
        }

        // Pasien
        $user = new User;
        $user->username = '08121494007';
        $user->password = bcrypt('admin');
        $user->is_active = 'y';
        $user->user_type = 'pasien';
        
        if($user->save())
        {
            $pasien = new Pasien;
            $pasien->nama = 'Antonio Saiful Islam';
            $pasien->is_verified = 'y';
            $pasien->nik = '3205050909960004';
            $pasien->tanggal_lahir = '1996-09-09';
            $pasien->tempat_lahir = 'Garut';
            $pasien->alamat = 'Garut';
            $pasien->agama = 'islam';
            $pasien->jenis_kelamin = 'l';
            $pasien->no_hp = '08121494007';
            $pasien->email = 'finallyantonio@gmail.com';
            $pasien->user_id = $user->id;
            $pasien->save();
        }
    }
}
