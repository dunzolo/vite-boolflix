<script>
import { store } from '../store.js';
import AppFilm from './AppFilm.vue';

export default {
    components: {
        AppFilm
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
        <h1>Films</h1>
        <div class="row">
            <AppFilm v-for="(item, index) in store.array_films" :key="index" :film="item" @mouseover="activeImage(item)"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-fluid {

    position: relative;

    h1 {
        color: $white;
    }

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

}
</style>