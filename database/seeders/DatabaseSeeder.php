<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(AdminSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(LayananSeeder::class);
        $this->call(DokterSeeder::class);
        $this->call(ObatSeeder::class);
        $this->call(BankSeeder::class);
    }
}
