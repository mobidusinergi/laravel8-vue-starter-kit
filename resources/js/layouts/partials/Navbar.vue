<template>
    <nav class="navbar navbar-fixed-top">
        <div class="container-fluid">

            <div class="navbar-left">
                <div class="navbar-brand">
                    <a class="small_menu_btn" href="javascript:void(0);"><i class="fa fa-align-left"></i></a>
                    <router-link :to="{ name: 'home' }" style="margin-left: 30px"><img src="/assets/images/logo_w.png" style="height: 30px" alt="" class="img-fluid"></router-link>
                </div>
                <form id="navbar-search" class="navbar-form search-form">
                    <input value="" class="form-control" placeholder="Search here..." type="text">
                    <button type="button" class="btn btn-default"><i class="icon-magnifier"></i></button>
                </form>
            </div>

            <div class="navbar-right">
                <div id="navbar-menu">
                    <ul class="nav navbar-nav">
                        
                        <Mail />
                        
                        <!-- <Notification /> -->

                        <li><a v-on:click="doLogout" class="icon-menu"><i class="fa fa-power-off"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Mail from '@/layouts/partials/component/Mail';
import Notification from '@/layouts/partials/component/Notification';

export default {
    components:{
        Mail, Notification
    }, 
    methods: {
        doLogout: function () {
            swal({
                title: "Anda akan keluar dari Aplikasi",
                text: "Lanjut?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.$store.dispatch('logout')
                    .then(() => {
                        toastr.success('Successfully logged out. Redirecting to Login Page')
                        window.location.href = "/login"
                    })
                    
                } else {
                    toastr.info("Canceled")
                }
            })
        },
    }

}
</script>

<style>

</style>