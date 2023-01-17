import { reactive } from 'vue';

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/movie?api_key=7d1f44bed1de55807bd46cc873a94d00&query=ritorno+al+futuro',
    array_films: [],
    filtered_array_films: [],
    array_series_TV: []
})