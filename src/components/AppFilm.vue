<script>
export default {
    props: {
        film: Object
    },
    data() {
        return {
        }
    },
    methods: {
        getFlag() {
            let language = this.film.original_language.toUpperCase();
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
        getImage() {
            if (this.film.backdrop_path)
                return `https://image.tmdb.org/t/p/w780${this.film.backdrop_path}`
            else
                return '/index.jpg'
        },
        getVoteStars() {
            let vote = Math.round(this.film.vote_average / 2);
            return vote;
        },
        getEmptyVoteStars() {
            let empty_vote = 5 - this.getVoteStars();
            return empty_vote;
        },
        lenghtDescription() {
            if (this.film.overview.length > 200) {
                this.film.overview = this.film.overview.substring(0, 201) + '...'
                return this.film.overview
            }
            return this.film.overview
        }
    }
}
</script>

<template lang="">
    <div class="col-2">
        <div class="card">
            <div class="front">
                <img class="image-film" :src="getImage()" alt="">
            </div>
            <div class="back">
                <div class="info p-2">
                    <h4>
                        <span class="fw-bold">Titolo: </span>
                        <span>{{ film.original_title }}</span>
                    </h4>
                    <p>
                        <span class="fw-bold">Titolo originale: </span>
                        <span>{{ film.title }}</span>
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
                    <img class="flag" :src="`https://www.countryflagicons.com/FLAT/64/${getFlag()}.png`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


.card {
    height: 350px;

    /* style the maincontainer class with all child div's of class .front */
    & .front {
        position: absolute;
        transform: perspective(600px) rotateY(0deg);

        width: 100%;
        height: 100%;

        backface-visibility: hidden;
        /* cant see the backside elements as theyre turning around */
        transition: transform .5s linear 0s;

        .image-film {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }

    /* style the maincontainer class with all child div's of class .back */
    & .back {
        position: absolute;
        transform: perspective(600px) rotateY(180deg);
        background: $grey;
        color: $white;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 5px;
        backface-visibility: hidden;
        /* cant see the backside elements as theyre turning around */
        transition: transform .5s linear 0s;

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

    .flag {
        width: 50px;
    }

    h4,
    p {
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