<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDokterSpesialisasisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dokter_spesialisasi', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('dokter_id');
            $table->foreign('dokter_id')->references('id')->on('dokter')->onDelete('cascade');

            $table->unsignedBigInteger('spesialisasi_id');
            $table->foreign('spesialisasi_id')->references('id')->on('spesialisasi')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dokter_spesialisasi');
    }
}
