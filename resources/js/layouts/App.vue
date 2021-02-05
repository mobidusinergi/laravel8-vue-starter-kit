<template>
    <div>
        
		<div v-if="isLoggedIn">
			<Navbar />

			<div id="left-sidebar" class="sidebar">
				<Leftbar />
				<Sidebar />
			</div>

			<div id="main-content">
			
				<div class="mt-3">
					<router-view></router-view>
				</div>

			</div>
		</div>
		<div v-else>
			<Login />
		</div>

    </div>
</template>

<script>

import Login from '@/pages/auth/Login'

import Navbar from '@/layouts/partials/Navbar'
import Sidebar from '@/layouts/partials/Sidebar'
import Leftbar from '@/layouts/partials/Leftbar'

export default {
	components: {
		Login,
		Navbar, Sidebar, Leftbar
	},

	computed: {
		isLoggedIn: function () {
            return this.$store.getters.isLoggedIn
        },
        user: function() {
            return JSON.parse(localStorage.getItem('user'))
        },
	},



}
</script>

<style scoped>



table tr td, table tr th{
    background-color: #ffffff !important;
}
</style>