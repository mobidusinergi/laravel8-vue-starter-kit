<template>
    <div class="auth-main">
        <div class="auth_div">
            <div class="card">
                <div class="auth_brand">
                    <a class="navbar-brand" href="javascript:void(0);">
                        <img src="/assets/images/logo.png" alt="" class="img-fluid">
                    </a>
                </div>
                <div class="body">
                    <p class="lead">
                        Silahkan Login<br>
                    </p>
                    <form class="form-auth-small m-t-20" @submit.prevent="doLogin">
                        <div class="form-group">
                            <label for="signin-email" class="control-label sr-only">Email</label>
                            <input type="text" v-model="form.username" class="form-control round" id="signin-email" value="" placeholder="Username">
                        </div>
                        <div class="form-group">
                            <label for="signin-password" class="control-label sr-only">Password</label>
                            <input type="password" v-model="form.password" class="form-control round" id="signin-password" value="thisisthepassword" placeholder="Password">
                        </div>
                        <div class="form-group clearfix">
                            <label class="fancy-checkbox element-left">
                                <input type="checkbox">
                                <span>Remember me</span>
                            </label>								
                        </div>
                        <button type="submit" class="btn btn-primary btn-round btn-block">LOGIN</button>
                        <div class="bottom">
                            <span class="helper-text m-b-10"><i class="fa fa-lock"></i> <a href="page-forgot-password.html">Forgot password?</a></span>
                            <span>Don't have an account? <a href="page-register.html">Register</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="auth_right">
            <div id="slider2" class="carousel slide" data-ride="carousel" data-interval="3000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                    </ol>
                <div class="carousel-inner pb-5">
                    <div class="carousel-item active carousel-item-left">
                        <img src="/assets/images/login-slide1.png" class="img-fluid" alt="login page">
                        <div class="px-4">
                            <h2>Bootstrap 4x</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="carousel-item carousel-item-next carousel-item-left">
                        <img src="/assets/images/logo.png" class="img-fluid" alt="login page">
                        <div class="px-4">
                            <h2>100% Secure</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/login-slide2.png" class="img-fluid" alt="login page">
                        <div class="px-4">
                            <h2>Saving Time</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {
            username: '',
            password: '',
        }
    }),

    methods: {
        async doLogin() {
            console.log(this.form)

            this.$store.dispatch('login', this.form)
            .then(res => {
                if (res.data.status == 1) {
                    swal(res.data.message, "Selamat Datang");
                    window.location = '/'
                } else if (res.data.status == 0) {
                    swal({
                        title: "Gagal Masuk",
                        text: res.data.message,
                        icon: "warning",
                        button: "Ok",
                    })
                }
            })
            .catch(err => {})
        },
    },
}
</script>

<style scoped>

</style>