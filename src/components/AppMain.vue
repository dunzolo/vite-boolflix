<script>
import AppContentsFilms from './AppContentsFilms.vue';
import AppContentsSeriesTV from './AppContentsSeriesTV.vue';

export default {
    components: {
        AppContentsFilms,
        AppContentsSeriesTV
    }
}
</script>

<template lang="">
    <main>
        <AppContentsFilms/>
        <AppContentsSeriesTV/>
    </main>
</template>

<style lang="scss" scoped>
main {
    position: relative;
    overflow-y: auto;
    height: calc(100vh - (50vh + 50px));

    &::-webkit-scrollbar {
        width: 12px;
        /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
        /* color of the scroll thumb */
        border-radius: 20px;
        /* roundness of the scroll thumb */
        border: 3px solid transparent;
        /* creates padding around scroll thumb */
    }
}
</style>