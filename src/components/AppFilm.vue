<script>
export default {
    props: {
        film: Object
    },
    methods: {
        getFlag() {
            let language = this.film.original_language.toUpperCase();
            console.log(language);
            switch (language) {
                case 'EN':
                    language = 'GB'
                    break;
                case 'JA':
                    language = 'JB'
                    break;
                case 'KO':
                    language = 'KR'
                    break;
                default:
                    break;
            }
            return language
        },
        getVoteStars() {
            let vote = Math.round(this.film.vote_average / 2);
            return vote;
        },
        getEmptyVoteStars() {
            let empty_vote = 5 - this.getVoteStars();
            return empty_vote;
        }
    },
}
</script>

<template lang="">
    <div class="">
        <img :src="`https://image.tmdb.org/t/p/w200${film.backdrop_path}`" alt="">
        <p>{{ film.original_title }}</p>
        <p>{{ film.title }}</p>
        <i class="fa-solid fa-star color-yellow" v-for="(item, index) in getVoteStars()" :key="index"></i>
        <i class="fa-regular fa-star color-yellow" v-for="(item, index) in getEmptyVoteStars()" :key="index"></i>
        <img :src="`https://www.countryflagicons.com/FLAT/64/${getFlag()}.png`" alt="">
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

.color-yellow {
    color: $yellow;
}
</style>