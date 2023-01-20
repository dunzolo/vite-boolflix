<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        //imposto immagine di sfondo se elemento è selezioanto e se è presente un immagine nel path che vado a recuperare dall'API
        image() {
            if (store.selected_item) {
                if (store.selected_item.backdrop_path)
                    return store.path_image + store.selected_item.backdrop_path
                else
                    return '/index.jpg'
            }
            else {
                if (store.array_films.length > 0) {
                    return store.path_image + store.array_films[0].backdrop_path
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
    height: 40vh;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>