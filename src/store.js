import { reactive } from 'vue';

export const store = reactive({
    // url: 'https://api.themoviedb.org/3/search/movie?api_key=7d1f44bed1de55807bd46cc873a94d00&query=ritorno+al+futuro',
    url_films: 'https://api.themoviedb.org/3/search/movie?language=en-US&api_key=7d1f44bed1de55807bd46cc873a94d00&query=',
    url_series_TV: 'https://api.themoviedb.org/3/search/tv?api_key=7d1f44bed1de55807bd46cc873a94d00&language=en-US&query=',
    array_films: [],
    array_series_TV: [],
})