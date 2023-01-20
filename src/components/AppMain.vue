<script>
import { store } from '../store.js';

import AppContentsFilms from './AppContentsFilms.vue';
import AppContentsSeriesTV from './AppContentsSeriesTV.vue';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppContentsFilms,
        AppContentsSeriesTV
    }
}
</script>

<template lang="">
    <main>
        <h1 v-if="store.array_films.length > 0">Film</h1>
        <AppContentsFilms/>
        <h1 id="serie-tv" v-if="store.array_series_TV.length > 0">Serie Tv</h1>
        <AppContentsSeriesTV/>
    </main>
</template>

<style lang="scss" scoped>
main {
    overflow-y: auto;
    height: calc(100vh - (40vh + 50px));
    padding: 1rem 0;

    /* width dell'intera scrollbar */
    &::-webkit-scrollbar {
        width: 12px;
    }

    /* color of the tracking area */
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        /* color of the scroll thumb */
        background-color: transparent;
        /* roundness of the scroll thumb */
        border-radius: 20px;
        /* creates padding around scroll thumb */
        border: 3px solid transparent;
    }
}
</style>