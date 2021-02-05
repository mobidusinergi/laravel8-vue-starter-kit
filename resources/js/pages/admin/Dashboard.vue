<template>
    <div style="padding-left: 20px; padding-right: 10px">

        <Header :title="'Dashboard Administrator'">
        </Header>
    </div>
</template>

<script>
import Header from '@/layouts/partials/Header'
import KProgress from 'k-progress';
import StarRating from 'vue-star-rating'


export default {

    components: {
        Header,
        'k-progress': KProgress,
        StarRating
    },

    data: () => ({
        count: {
            pasien: {
                verified: 0,
                unverified: 0
            },
            dokter: 0,
            jadwal: 0,
        },
        dokter: [],
        chart: {}
    }),

    mounted() {
    },

    methods: {
    }
}
</script>

<style scoped>


.row-flex {
  display: flex;
  flex-wrap: wrap;
}

</style>