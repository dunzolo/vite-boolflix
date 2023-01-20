<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            title: '',
            menu: [
                {
                    label: 'Home',
                    active: true
                },
                {
                    label: 'Serie TV',
                    active: false
                },
                {
                    label: 'Film',
                    active: false
                },
                {
                    label: 'Originali',
                    active: false
                },
                {
                    label: 'Aggiunti di recente',
                    active: false
                },
                {
                    label: 'La mia lista',
                    active: false
                }
            ]
        }
    },
    created() {
        this.getGenre();
    },
    methods: {
        getGenre() {
            axios.get(store.url_genre_films).then((response) => {
                store.array_genre_films = response.data.genres
            })
        },
        sendTitle() {
            //posso recuperare nella funzione il valore di title nell'input v-model
            this.$emit('title', this.title)
        }
    },
}
</script>

<template lang="">
    <header class="container-fluid">
        <div class="header-left">
            <div class="logo">
                <img src="/logo-netflix-header.png" alt="">
            </div>
            <ul>
                <li v-for="(item, index) in menu" :key="index">
                    <a href="/" :class="item.active  ? 'active' : ''">{{ item.label }}</a>
                </li>
            </ul>
        </div>
        <div class="header-right">
            <div class="input-group">
                <select name="genre-films" id="genre-films" class="form-select" v-model="store.selected_genre">
                    <option value="">Genere</option>
                    <option :value="item.id" v-for="(item, index) in store.array_genre_films" :key="index">{{ item.name }}</option>
                </select>
                <input class="form-control" type="text" placeholder="Inserisci il titolo" v-model="title">
                <button class="btn btn-danger" @click="sendTitle"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <ul>
                <li>DAVIDE</li>
                <li><i class="fa-solid fa-user"></i></li>
                <li><i class="fa-solid fa-bell"></i></li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

header {
    height: 50px;
    background-color: $black;
    @include flex-center;
    justify-content: space-between;

    .header-left {
        height: 100%;
        @include flex-center;

        .logo img {
            width: 150px
        }

        ul {
            @include flex-center;
            margin-bottom: 0px;

            li a {
                padding-right: 10px;
                font-size: 15px;
                color: $grey;
                text-decoration: none;

                &.active {
                    color: $white;
                }

                &:hover {
                    color: $white;
                }

            }

        }
    }

    .header-right {
        @include flex-center;

        ul {
            @include flex-center;
            margin-bottom: 0px;
            padding-left: 1rem;

            li {
                padding-right: 10px;
                font-size: 15px;
                color: $white;
            }
        }
    }
}
</style>