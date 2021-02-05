<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePOSDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pos_detail', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('pos_id');
            $table->foreign('pos_id')->references('id')->on('pos_header')->onDelete('cascade');

            $table->unsignedBigInteger('obat_id');
            $table->foreign('obat_id')->references('id')->on('obat')->onDelete('cascade');

            $table->string('nama');
            $table->string('satuan')->nullable();
            $table->integer('harga');
            $table->integer('qty');
            $table->integer('sub_total');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('p_o_s_details');
    }
}
