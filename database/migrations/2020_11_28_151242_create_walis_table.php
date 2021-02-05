<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWalisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wali', function (Blueprint $table) {
            $table->id();

            $table->string('nama');
            $table->string('nik')->unique()->nullable();
            $table->date('tanggal_lahir');
            $table->string('tempat_lahir');
            $table->string('alamat');

            $table->enum('jenis_kelamin', ['l', 'p']);
            $table->enum('agama', ['islam','protestan','katholik','hindu','buddha','konghucu']);
            
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
        Schema::dropIfExists('wali');
    }
}
