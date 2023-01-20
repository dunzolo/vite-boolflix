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
    methods: {
        activeImage(item) {
            store.selected_item = item
        }
    }
}
</script>

<template lang="">
    <div class="container-fluid">
        <h1>Series TV</h1>
        <div class="row">
            <AppSeriesTV v-for="(item, index) in store.array_series_TV" :key="index" :series_tv="item" @mouseover="activeImage(item)"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.row {
    &::-webkit-scrollbar {
        height: 0.3rem;
        max-width: 10px;
        margin: 5rem;
    }

    &::-webkit-scrollbar-track {
        background: $grey;

    }

    &::-webkit-scrollbar-thumb {
        background: $red;
        max-width: 10px;
        height: 10px;
        border-radius: 20px;
    }
}

h1 {
    color: $white;
}
</style>