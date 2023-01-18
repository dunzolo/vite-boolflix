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
    <div class="container-fluid">
        <h1>Films</h1>
        <div class="row">
            <AppFilm v-for="(item, index) in store.array_films" :key="index" :film="item"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h1 {
    color: $white;
}
</style>