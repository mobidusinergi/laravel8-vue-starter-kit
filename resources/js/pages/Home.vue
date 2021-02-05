<template>
    <div>
        <AdminDashboard v-if="checkType == 'admin'" />
    </div>
</template>

<script>

import AdminDashboard from '@/pages/admin/Dashboard'

export default {

    components: {
        AdminDashboard
    },

    computed: {
        checkType: function () {
            return JSON.parse(this.$store.getters.user).user_type
        },
    },

    data: () => ({
        title: 'Dashboard'
    })
}
</script>
