<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id()->startingValue(1111);

            $table->unsignedBigInteger('konsultasi_id');
            $table->foreign('konsultasi_id')->references('id')->on('konsultasi')->onDelete('cascade');


            $table->unsignedBigInteger('pasien_id')->nullable();
            $table->foreign('pasien_id')->references('id')->on('pasien')->onDelete('cascade');

            $table->unsignedBigInteger('norek_id')->nullable();
            $table->foreign('norek_id')->references('id')->on('nomor_rekening')->onDelete('cascade');

            $table->unsignedBigInteger('front_office_id')->nullable();
            $table->foreign('front_office_id')->references('id')->on('front_office')->onDelete('cascade');    
            
            $table->integer('nominal')->nullable();
            $table->text('image')->nullable();

            $table->enum('status', ['y', 'n'])->nullable();
            $table->string('alasan_penolakan')->nullable();

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
        Schema::dropIfExists('payments');
    }
}
