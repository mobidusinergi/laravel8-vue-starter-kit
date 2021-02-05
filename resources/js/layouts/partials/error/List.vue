<template>
    <div class="alert alert-danger" v-if="errors.length > 0">
        <h5><i class="fa fa-exclamation-triangle"></i> Terjadi Kesalahan</h5>
        <hr>
        <ul style="margin-left: -20px">
            <li v-for="(err, index) in errors" :key="index">{{ err }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['errors']
}
</script>

<style>

</style>