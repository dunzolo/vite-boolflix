import { reactive } from 'vue';

export const store = reactive({

    //api
    url_films: `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=7d1f44bed1de55807bd46cc873a94d00&query=`,
    url_series_TV: `https://api.themoviedb.org/3/search/tv?api_key=7d1f44bed1de55807bd46cc873a94d00&language=en-US&query=`,
    url_catalog_films: `https://api.themoviedb.org/3/movie/popular?api_key=7d1f44bed1de55807bd46cc873a94d00&language=en-US`,
    url_catalog_series_tv: `https://api.themoviedb.org/3/tv/popular?api_key=7d1f44bed1de55807bd46cc873a94d00&language=en-US`,
    url_genre_films: `https://api.themoviedb.org/3/genre/movie/list?api_key=7d1f44bed1de55807bd46cc873a94d00&language=en-US`,
    url_genre_series_tv: `https://api.themoviedb.org/3/genre/tv/list?api_key=7d1f44bed1de55807bd46cc873a94d00&language=en-US`,

    //array
    array_films: [],
    array_series_TV: [],

    //data
    selected_genre: '',
    selected_item: '',

    //path
    path_image: 'http://image.tmdb.org/t/p/w1280/',
    path_icon: 'https://www.countryflagicons.com/FLAT/64/'
})