<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContentsFilms from './components/AppContentsFilms.vue';

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppContentsFilms
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getCatalog();
  },
  methods: {
    getCatalog() {
      axios.get(store.url).then((response) => {
        store.array_films = response.data.results
        console.log(store.array_films);
      })
    },
    searchTitle(title) {
      //filtro l'array dei film in base al titolo inserito nella search bar passata tramite $emit
      store.filtered_array_films = store.array_films.filter((elem) => {
        return elem.title.toLowerCase().includes(title);
      })
    }
  },
}
</script>

<template lang="">
  <div>
    <AppHeader @title="searchTitle"/>
    <AppContentsFilms />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
