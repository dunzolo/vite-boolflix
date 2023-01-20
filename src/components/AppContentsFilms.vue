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
        // recupero l'elemento attivo al passaggio del mouse
        activeImage(item) {
            store.selected_item = item
        }
    }
}
</script>

<template lang="">
    <div class="container-fluid">
        <div class="row">
            <!-- passo le informazioni al componente AppFilm per creare il rispettivo elemento e recupero l'elemento attivo al passaggio del mouse -->
            <AppFilm v-for="(item, index) in store.array_films" :key="index" :film="item" @mouseover="activeImage(item)"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-fluid {
    .row {

        /* width dell'intera scrollbar */
        &::-webkit-scrollbar {
            height: 0.3rem;
            max-width: 10px;
            margin: 5rem;
        }

        /* color dell'area tracking */
        &::-webkit-scrollbar-track {
            background: $grey;
        }

        &::-webkit-scrollbar-thumb {
            /* color of the scroll thumb */
            background: $red;
            /* roundness of the scroll thumb */
            border-radius: 20px;
        }
    }
}
</style>