<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Layanan;

use Str;

class LayananSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $layanan = new Layanan;
        $layanan->slug = Str::slug('konsultasi online');
        $layanan->nama = 'Konsultasi Online';
        $layanan->keterangan = 'Konsultasi Online dengan Dokter Professional Kami';
        $layanan->shareable = 'n';
        $layanan->save();

        $layanan = new Layanan;
        $layanan->slug = Str::slug('konsultasi offline');
        $layanan->nama = 'Konsultasi Offline';
        $layanan->keterangan = 'Buat Jadwal Konsultasi dengan Dokter Professional Kami';
        $layanan->shareable = 'n';
        $layanan->save();

        $layanan = new Layanan;
        $layanan->slug = Str::slug('Swab Test');
        $layanan->nama = 'SWAB Test';
        $layanan->keterangan = 'SWAB Test untuk Pemeriksaan COVID-19';
        $layanan->biaya = 300000;
        $layanan->shareable = 'y';
        $layanan->save();

        $layanan = new Layanan;
        $layanan->slug = Str::slug('Rapid Test Antigen');
        $layanan->nama = 'Rapid Test Antigen';
        $layanan->keterangan = 'Rapid Test Antigen untuk Pemeriksaan COVID-19';
        $layanan->biaya = 250000;
        $layanan->shareable = 'y';
        $layanan->save();

        $layanan = new Layanan;
        $layanan->slug = Str::slug('Rapid Test Basic');
        $layanan->nama = 'Rapid Test Antigen';
        $layanan->keterangan = 'Rapid Test untuk Pemeriksaan COVID-19';
        $layanan->biaya = 150000;
        $layanan->shareable = 'y';
        $layanan->save();
    }
}
