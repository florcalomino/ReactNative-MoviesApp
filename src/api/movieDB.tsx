import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '116182067adfb2b2aa2d0f78048eee2b',
    language: 'es-ES',
  },
});

export default movieDB;
