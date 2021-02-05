import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios';
import decode from 'jwt-decode'

import store from '@/store'

import admin_router from '@/router/admin'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: '/dashboard',
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/dashboard",
            name: 'home',
            component: () => import('@/pages/Home.vue'),
            meta: {
                requiresAuth: true
            }
        },
        admin_router,
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {

            function errorResponseHandler(error) {
                // check for errorHandle config
                if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
                    return Promise.reject(error);
                }
            
                // if has response show the error 
                if (error.response) {
                    if(error.response.data.message == 'Unauthenticated.')
                    {
                        store.dispatch('logout')
                        .then(() => {
                            window.location.href = "/login"
                        })
                    }
                    if(error.response.data.message == 'This action is unauthorized.')
                    {
                        toastr.error(error.response.data.message, 'Oopps! Sorry');
                        router.push({name: 'module1.abmp_report'})
                    }
                }
            }
            
            // apply interceptor on response
            axios.interceptors.response.use(
               response => response,
               errorResponseHandler
            )
            
            const token = localStorage.getItem('token');
            if (!token) {
                store.dispatch('logout')
                .then(() => {
                    window.location.href = "/login";
                    // toastr.success('Successfully logged out')
                })
            }
            
            try {
                const { exp } = decode(token);
                if (exp < new Date().getTime() / 1000) {
                    swal({
                        title: "Your Session Has Expired",
                        text: "You have to relogin",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                    .then((value) => {
                        if (value) {
                            store.dispatch('logout')
                            .then(() => {
                                toastr.success('You will be redirected to Login page')
                                window.location.href = "/login"
                            })
                        } else {
                            toastr.info("You canceled to re-login. You should to login back to access XPREAM")
                        }
                    })
                    
                }
            } catch (e) {
                store.dispatch('logout')
                .then(() => {
                    window.location.href = "/login";
                    // toastr.success('Successfully logged out')
                })
            }
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

router.beforeResolve((to, from, next) => {
    if (to.path) {
        // window.confirm('Do you really want to leave? you have unsaved changes!')
        // if (window.confirm("Do you really want to leave?")) { 
        // }
        NProgress.start()
    }
    next()
});

router.afterEach((to, from, next) => {
    // pace.done()
    NProgress.done()
});

export default router