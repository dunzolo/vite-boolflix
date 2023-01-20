<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            path: 'http://image.tmdb.org/t/p/w1280/'
        }
    },
    methods: {
        image() {
            if (store.selected_item) {
                if (store.selected_item.backdrop_path)
                    return this.path + store.selected_item.backdrop_path
                else
                    return '/index.jpg'
            }
            else {
                if (store.array_films.length > 0) {
                    return this.path + store.array_films[0].backdrop_path
                }
            }
        }
    }
}
</script>

<template lang="">
    <div class="jumbotron">
        <img :src="image()" alt="">
    </div>
</template>

<style lang="scss">
.jumbotron {
    width: 100%;
    height: 50vh;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>