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
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <AppFilm class="col-2 film" v-for="(item, index) in store.array_films" :key="index" :film="item"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    display: flex;

    .film {
        text-align: center;
        margin-bottom: 2rem;
    }
}
</style>