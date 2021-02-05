<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Obat\Satuan;
use App\Models\Obat\Kategori;

class ObatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $satuan = [
            ['slug' => 'minuman', 'nama' => 'Minuman'],
            ['slug' => 'obat_bebas', 'nama' => 'Obat Bebas'],
            ['slug' => 'obat_keras', 'nama' => 'Obat Keras'],
            ['slug' => 'obat_luar', 'nama' => 'Obat Luar'],
            ['slug' => 'alkes', 'nama' => 'Alkes'],
            ['slug' => 'injeksi', 'nama' => 'Injeksi'],
            ['slug' => 'obat_loss', 'nama' => 'Obat Loss'],
            ['slug' => 'obat_keras_syrup', 'nama' => 'Obat Keras Syrup'],
            ['slug' => 'rt', 'nama' => 'Rumah Tangga'],
            ['slug' => 'infus', 'nama' => 'Infus'],
            ['slug' => 'susu', 'nama' => 'Susu'],
            ['slug' => 'salep', 'nama' => 'Salep'],
            ['slug' => 'obat_mata', 'nama' => 'Obat Mata'],
            ['slug' => 'kosmetik', 'nama' => 'Kosmetik'],
        ];

        $kategori = [
            ['slug' => 'box', 'nama' => 'Box'],
            ['slug' => 'botol', 'nama' => 'Botol'],
            ['slug' => 'bag', 'nama' => 'Bag'],
            ['slug' => 'tube', 'nama' => 'Tube'],
            ['slug' => 'vial', 'nama' => 'Vial'],
            ['slug' => 'strip', 'nama' => 'Strip'],
            ['slug' => 'ampul', 'nama' => 'Ampul'],
        ];

        Satuan::insert($satuan);
        Kategori::insert($kategori);
    }
}
