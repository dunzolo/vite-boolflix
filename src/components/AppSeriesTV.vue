<script>
import { store } from '../store';

export default {
    props: {
        series_tv: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getFlag() {
            //converto le lingue per recuperare correttamente le bandiere
            let language = this.series_tv.original_language.toUpperCase();
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
        getImage() {
            //verifico se il path mi restituisce un immagine
            if (this.series_tv.backdrop_path)
                return store.path_image + this.series_tv.backdrop_path
            else
                return '/index.jpg'
        },
        getVoteStars() {
            //voto da 1 a 5
            let vote = Math.round(this.series_tv.vote_average / 2);
            return vote;
        },
        getEmptyVoteStars() {
            //utilizzo il voto per determinare le restanti stelle vuote
            let empty_vote = 5 - this.getVoteStars();
            return empty_vote;
        },
        lenghtDescription() {
            //descrizione supera i 200 caratteri aggiungo una stringa
            if (this.series_tv.overview.length > 200) {
                this.series_tv.overview = this.series_tv.overview.substring(0, 201) + '...'
                return this.series_tv.overview
            }
            return this.series_tv.overview
        }
    },
}
</script>

<template lang="">
    <div class="col-2">
        <div class="card mb-1">
            <div class="front">
                <img class="image-film" :src="getImage()" alt="">
            </div>
            <div class="back">
                <div class="info p-2">
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
                        <span>{{ lenghtDescription() }}</span>
                    </p>
                    <img class="flag" :src="`${store.path_icon}${getFlag()}.png`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


.card {
    height: 300px;

    /* style the maincontainer class with all child div's of class .front */
    & .front {
        @include front-card;

        .image-film {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }

    /* style the maincontainer class with all child div's of class .back */
    & .back {
        @include back-card;

        .color-yellow {
            color: $yellow;
        }
    }

    &:hover .front {
        transform: perspective(600px) rotateY(-180deg);
    }

    &:hover .back {
        transform: perspective(600px) rotateY(0deg);
    }

    h4,
    p {
        //bootstrap di default imposta del margin bottom
        margin-bottom: 0 !important;
    }

    p {
        line-height: 1.2;
    }

    img {
        border-radius: 10px;
    }
}
</style>