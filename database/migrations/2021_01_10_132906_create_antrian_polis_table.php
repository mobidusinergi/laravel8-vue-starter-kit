<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAntrianPolisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('antrian_poli', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('konsultasi_id');
            $table->foreign('konsultasi_id')->references('id')->on('konsultasi')->onDelete('cascade');

            $table->unsignedBigInteger('pasien_id');
            $table->foreign('pasien_id')->references('id')->on('pasien')->onDelete('cascade');

            $table->unsignedBigInteger('dokter_id')->nullable();
            $table->foreign('dokter_id')->references('id')->on('dokter')->onDelete('cascade');

            $table->unsignedBigInteger('poli_id');
            $table->foreign('poli_id')->references('id')->on('poli')->onDelete('cascade');

            $table->unsignedBigInteger('jadwal_id');
            $table->foreign('jadwal_id')->references('id')->on('jadwal')->onDelete('cascade');

            $table->date('tanggal');

            $table->enum('status', ['selesai', 'menunggu', 'terlewat', 'batal']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('antrian_polis');
    }
}
