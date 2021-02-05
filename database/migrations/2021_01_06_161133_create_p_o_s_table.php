<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePOSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pos_header', function (Blueprint $table) {
            $table->id();

            $table->string('no_faktur')->unique();

            $table->unsignedBigInteger('pasien_id')->nullable();
            $table->foreign('pasien_id')->references('id')->on('pasien')->onDelete('cascade');

            $table->unsignedBigInteger('peracik_id')->nullable();
            $table->foreign('peracik_id')->references('id')->on('pasien')->onDelete('cascade');

            $table->unsignedBigInteger('apoteker_id');
            $table->foreign('apoteker_id')->references('id')->on('apoteker')->onDelete('cascade');

            $table->integer('total_belanja');
            $table->integer('diskon')->default(0)->nullable();
            $table->integer('pajak')->default(0)->nullable();
            $table->integer('jasa_racik')->default(0)->nullable();
            $table->integer('grandtotal');
            $table->enum('metode_pembayaran', ['tunai', 'nontunai'])->default('tunai');
            $table->enum('status', ['lunas', 'kredit']);
            $table->date('jatuh_tempo')->nullable();

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
        Schema::dropIfExists('p_o_s');
    }
}
