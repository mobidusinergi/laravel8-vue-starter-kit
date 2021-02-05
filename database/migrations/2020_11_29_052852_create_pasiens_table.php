<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePasiensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pasien', function (Blueprint $table) {
            $table->id();

            // Foreign Key
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('wali_id')->nullable();
            $table->foreign('wali_id')->references('id')->on('users')->onDelete('cascade');

            $table->enum('is_verified', ['y', 'n'])->default('n');
            
            $table->string('nama');
            $table->string('nik')->unique()->nullable();
            $table->date('tanggal_lahir')->nullable();
            $table->string('tempat_lahir')->nullable();
            $table->string('alamat')->nullable();
            $table->enum('jenis_kelamin', ['l', 'p'])->nullable();
            $table->enum('agama', ['islam','protestan','katholik','hindu','buddha','konghucu'])->nullable();
            $table->string('no_hp')->unique()->nullable();
            $table->string('email')->unique()->nullable();

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
        Schema::dropIfExists('pasien');
    }
}
