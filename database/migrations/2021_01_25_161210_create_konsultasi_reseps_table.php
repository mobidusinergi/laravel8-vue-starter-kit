<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKonsultasiResepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resep_detail', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('resep_id');
            $table->foreign('resep_id')->references('id')->on('resep')->onDelete('cascade');

            $table->unsignedBigInteger('obat_id');
            $table->foreign('obat_id')->references('id')->on('obat')->onDelete('cascade');

            $table->unsignedBigInteger('satuan_id')->nullable();
            $table->foreign('satuan_id')->references('id')->on('obat_satuan')->onDelete('cascade');

            $table->string('satuan')->nullable();
            $table->string('petunjuk')->nullable();
            $table->integer('qty');

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
        Schema::dropIfExists('resep_detail');
    }
}
