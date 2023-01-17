<script>
export default {
    props: {
        film: Object
    },
    methods: {

    },
}
</script>

<template lang="">
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342${film.backdrop_path}`" alt="">
        <p>{{ film.original_title }}</p>
        <p>{{ film.title }}</p>
        <p>{{ film.vote_average }}</p>
        <img :src="`https://www.countryflagicons.com/FLAT/64/${(film.original_language).toUpperCase()}.png`" alt="">
    </div>
</template>

<style lang="scss">

</style>