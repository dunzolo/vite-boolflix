<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="film" v-for="(item, index) in store.array_films" :key="index">
        <p>
            {{ item.original_title }}
        </p>
        <p>
            {{ item.title }}
        </p>
        <p>
            {{ item.original_language }}
        </p>
        <p>
            {{ item.vote_average }}
        </p>
    </div>
</template>

<style lang="scss">
.film {
    text-align: center;
    margin-bottom: 2rem;
}
</style>