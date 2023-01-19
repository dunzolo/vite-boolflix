<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContentsFilms from './components/AppContentsFilms.vue';
import AppContentsSeriesTV from './components/AppContentsSeriesTV.vue';

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppContentsFilms,
    AppContentsSeriesTV
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
      axios.get(store.url_catalog_films).then((response) => {
        store.array_films = response.data.results
      })
      axios.get(store.url_catalog_series_tv).then((response) => {
        store.array_series_TV = response.data.results
      })
    },
    searchTitle(title) {
      let new_url_films = store.url_films;
      let new_url_series_tv = store.url_series_TV;
      new_url_films += title;
      new_url_series_tv += title;
      axios.get(new_url_films).then((response) => {
        store.array_films = response.data.results
      })
      axios.get(new_url_series_tv).then((response) => {
        store.array_series_TV = response.data.results
      })
    }
  },
}
</script>

<template lang="">
  <div>
    <AppHeader @title="searchTitle"/>
    <AppContentsFilms />
    <AppContentsSeriesTV />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
