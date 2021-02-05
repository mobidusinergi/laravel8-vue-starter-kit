<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoktersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dokter', function (Blueprint $table) {
            $table->id();

            // Foreign Key
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->enum('is_active', ['y', 'n'])->default('n');

            $table->string('nip')->unique()->nullable();
            $table->string('nik')->unique();
            $table->date('tanggal_lahir');
            $table->string('tempat_lahir');
            $table->string('nama');
            $table->string('alamat');
            $table->string('no_hp')->unique();
            $table->string('email')->unique();

            // Tariff
            $table->integer('biaya')->nullable();
            $table->integer('tariff_chat')->nullable();
            $table->integer('tariff_videocall')->nullable();

            $table->text('biodata')->nullable();


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
        Schema::dropIfExists('dokter');
    }
}
