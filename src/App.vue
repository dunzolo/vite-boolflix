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
    }
  },
}
</script>

<template lang="">
  <div>
    <AppHeader/>
    <AppContentsFilms/>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>
