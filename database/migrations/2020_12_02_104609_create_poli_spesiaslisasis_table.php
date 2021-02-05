<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePoliSpesiaslisasisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poli_spesialisasi', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('poli_id');
            $table->foreign('poli_id')->references('id')->on('poli')->onDelete('cascade');

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
        Schema::dropIfExists('poli_spesiaslisasi');
    }
}
