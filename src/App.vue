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
  methods: {
    searchTitle(title) {
      console.log(store.url);
      let newUrl = store.url;
      newUrl += title;
      console.log(newUrl);
      axios.get(newUrl).then((response) => {
        store.array_films = response.data.results
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
