<script>
export default {
    props: {
        series_tv: Object
    },
    data() {
        return {
            visibility: true
        }
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
        },
        lenghtDescription() {
            if (this.series_tv.overview.length > 350) {
                this.series_tv.overview = this.series_tv.overview.substring(0, 201) + '...'
                return this.series_tv.overview
            }
            return this.series_tv.overview
        }
    },
}
</script>

<template lang="">
    <div class="col-2 mb-2" @mouseover="visibility=false" @mouseleave="visibility=true">
        <div v-if="visibility" class="card h-20-rem">
            <img class="image-film" :src="`https://image.tmdb.org/t/p/w342${series_tv.backdrop_path}`" alt="">
        </div>
        <div v-if="!visibility" class="info h-20-rem p-2">
            <h4>
                <span class="fw-bold">Titolo: </span>
                <span>{{ series_tv.name }}</span>
            </h4>
            <p>
                <span class="fw-bold">Titolo originale: </span>
                <span>{{ series_tv.original_name }}</span>
            </p>
            <p>
                <span class="fw-bold">Voto: </span>
                <i class="fa-solid fa-star color-yellow" v-for="(item, index) in getVoteStars()" :key="index"></i>
                <i class="fa-regular fa-star color-yellow" v-for="(item, index) in getEmptyVoteStars()" :key="index"></i>
            </p>
            <p>
                <span class="fw-bold">Descrizione: </span>
                <!-- <span> {{ series_tv.overview }}</span> -->
                <span>{{ lenghtDescription() }}</span>
            </p>
            <img class="flag" :src="`https://www.countryflagicons.com/FLAT/64/${getFlag()}.png`" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.h-20-rem {
    height: 20rem;

    .image-film {
        height: 100%;
        object-fit: cover;
    }
}

.info {
    background-color: $black;
    color: $white;
    border: 1px solid $white;
}

.flag {
    width: 50px;
}

.col-4:hover {
    cursor: pointer;
}

h4,
p {
    margin-bottom: 0 !important;
}

.color-yellow {
    color: $yellow;
}
</style>