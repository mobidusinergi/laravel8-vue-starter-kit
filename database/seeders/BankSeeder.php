<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Bank;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $banks = [
            ['slug' => 'gopay', 'nama' => 'GoPay', 'logo' => 'gopay.png', 'otomatis' => 'n'],
            ['slug' => 'mandiri', 'nama' => 'Mandiri', 'logo' => 'mandiri.png', 'otomatis' => 'n'],
            ['slug' => 'bni','nama' => 'BNI', 'logo' => 'bni.png', 'otomatis' => 'n'],
            ['slug' => 'bca', 'nama' => 'BCA', 'logo' => 'bca.png', 'otomatis' => 'n'],
            ['slug' => 'bri', 'nama' => 'BRI', 'logo' => 'bri.png', 'otomatis' => 'n'],
            ['slug' => 'bjb', 'nama' => 'BJB', 'logo' => 'bjb.png', 'otomatis' => 'n'],
        ];

        Bank::insert($banks);
    }
}
