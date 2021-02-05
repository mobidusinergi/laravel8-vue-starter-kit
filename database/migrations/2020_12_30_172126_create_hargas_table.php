<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHargasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('obat_harga', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('obat_id')->nullable();
            $table->foreign('obat_id')->references('id')->on('obat')->onDelete('cascade');

            $table->unsignedBigInteger('satuan_id')->nullable();
            $table->foreign('satuan_id')->references('id')->on('obat_satuan')->onDelete('cascade');

            $table->integer('harga_jual');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('obat_harga');
    }
}
