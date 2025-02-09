import axios from 'axios';

const API_KEY = '4f349eaa26ab680508bb40abbe6da2af';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async page => {
  return await axios.get('/trending/movie/day?language=ru', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};

export const fetchMovieById = async movieId => {
  return await axios.get(`movie/${movieId}?language=ru`, {
    params: {
      api_key: API_KEY,
      append_to_response: 'videos',
    },
  });
};

export const fetchCast = async movieId => {
  return await axios.get(`movie/${movieId}/credits?language=ru`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieReviews = async movieId => {
  return await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchMovieBySearchQuery = async (query, page) => {
  return await axios.get('search/movie?language=ru', {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
};
