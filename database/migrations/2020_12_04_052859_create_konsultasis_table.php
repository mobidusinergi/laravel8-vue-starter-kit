<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKonsultasisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('konsultasi', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('dokter_id')->nullable();
            $table->foreign('dokter_id')->references('id')->on('dokter')->onDelete('cascade');

            $table->unsignedBigInteger('poli_id')->nullable();
            $table->foreign('poli_id')->references('id')->on('poli')->onDelete('cascade');

            $table->unsignedBigInteger('pasien_id');
            $table->foreign('pasien_id')->references('id')->on('pasien')->onDelete('cascade');

            $table->unsignedBigInteger('jadwal_id')->nullable();
            $table->foreign('jadwal_id')->references('id')->on('jadwal')->onDelete('cascade');

            $table->string('kode_konsultasi')->unique();

            $table->enum('kategori', ['offline', 'online', 'swab-corona', 'rapid-antigen-corona', 'rapid-basic-corona'])->nullable();
            $table->enum('jenis', ['videocall', 'chat'])->nullable();

            $table->dateTime('approved_at', 0)->nullable();
            $table->enum('status', ['konfirmasi', 'ditolak', 'menunggu'])->default('menunggu');

            $table->string('no_antrian');
            $table->date('tanggal');

            $table->integer('total_bayar')->nullable();
            $table->enum('status_pembayaran', ['paid', 'unpaid', 'confirm']);

            $table->string('token')->nullable();
            $table->enum('is_done', ['y', 'n'])->default('n');

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
        Schema::dropIfExists('konsultasis');
    }
}
