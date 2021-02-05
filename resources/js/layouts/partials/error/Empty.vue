<template>
    <div>
        <center>
            <div class="card pt-3">
                <div class="auth_brand">
                    <br>
                    <a class="navbar-brand" href="javascript:void(0);">
                        <img src="/assets/images/logo.png" alt="" class="img-fluid">
                    </a>
                </div>
                <hr>
                <div class="body">
                    <p class="lead mb-3"><span class="number left">Oopss! </span><span class="text">Belum Ada Data Pada Halaman Ini</span></p>
                    <p>Segera Tambah/Buat Data</p>
                    <div class="margin-top-30">
                        <a href="javascript:history.go(-1)" class="btn btn-round btn-default"><i class="fa fa-arrow-left"></i> <span>Kembali</span></a>
                        <router-link :to="{ name: 'home' }" class="btn btn-round btn-primary"><i class="fa fa-home"></i> <span>Beranda</span></router-link>
                    </div>
                </div>
            </div>
        </center>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>