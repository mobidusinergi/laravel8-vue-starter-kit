<template>
    <div class="tab-content" id="main-menu">
        <div class="tab-pane active" id="Home-icon">
            <nav class="sidebar-nav sidebar-scroll">
                <ul class="metismenu">
                    <li :class="{'active' : subIsActive('/dashboard')}">
                        <router-link :to="{ name: 'home' }"><i class="icon-speedometer"></i><span>Dashboard</span></router-link>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
    
    <!-- <Envelope /> -->
    <!-- <Mini /> -->
    <!-- <Mini /> -->
    <!-- <Setting /> -->

    </div>
</template>

<script>
import Envelope from '@/layouts/partials/component/Envelope';
import Mini from '@/layouts/partials/component/Mini';
import Profile from '@/layouts/partials/component/Profile';
import Setting from '@/layouts/partials/component/Setting';

export default {
    components:{
        Envelope, Mini, Profile, Setting
    },

    methods: {
        subIsActive(input) {
            $('.metismenu').removeClass('active')
            const paths = Array.isArray(input) ? input : [input]
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 // current path starts with this path string
            })
        },
    }
}
</script>

<style>

</style>