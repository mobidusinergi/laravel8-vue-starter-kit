<template>
    <div class="block-header">
        <div class="row clearfix">
            <div class="col-md-7 col-sm-12">
                <h1 v-html="title"></h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link :to="{ name: 'home' }"><i class="fa fa-home"></i> Beranda</router-link></li>
                        <slot name="breadcrumb"></slot>
                    </ol>
                </nav>
            </div>            
            <div class="col-md-5 col-sm-12 text-right hidden-xs">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>

</style>