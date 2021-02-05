<template>
    <div class="sidebar_list">
        <MenuAdmin v-if="checkType == 'admin'"></MenuAdmin>
    </div>
</template>

<script>

import MenuAdmin from '@/layouts/partials/menu/Admin'

export default {

    components: {
        MenuAdmin
    },

    computed: {
        checkType: function () {
            return JSON.parse(this.$store.getters.user).user_type
        },
    }

}
</script>

<style>

</style>