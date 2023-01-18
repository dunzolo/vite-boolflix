<script>
import { store } from '../store.js';
import AppSeriesTV from './AppSeriesTV.vue';

export default {
    components: {
        AppSeriesTV
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="container-fluid">
        <h1>Series TV</h1>
        <div class="row">
            <AppSeriesTV v-for="(item, index) in store.array_series_TV" :key="index" :series_tv="item"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h1 {
    color: $white;
}
</style>