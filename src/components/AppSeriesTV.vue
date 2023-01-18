<script>
export default {
    props: {
        series_tv: Object
    },
    methods: {
        getFlag() {
            let language = this.series_tv.original_language.toUpperCase();
            console.log(language);
            switch (language) {
                case 'EN':
                    language = 'GB'
                    break;
                case 'JA':
                    language = 'JP'
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
            let vote = Math.round(this.series_tv.vote_average / 2);
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
        <img :src="`https://image.tmdb.org/t/p/w200${series_tv.backdrop_path}`" alt="">
        <p>{{ series_tv.name }}</p>
        <p>{{ series_tv.original_name }}</p>
        <i class="fa-solid fa-star color-yellow" v-for="(item, index) in getVoteStars()" :key="index"></i>
        <i class="fa-regular fa-star color-yellow" v-for="(item, index) in getEmptyVoteStars()" :key="index"></i>
        <img :src="`https://www.countryflagicons.com/FLAT/64/${getFlag()}.png`" alt="">
    </div>
</template>

<style lang="scss">

</style>