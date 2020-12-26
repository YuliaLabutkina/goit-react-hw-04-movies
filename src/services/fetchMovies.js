import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '81f248d3c9154788229a5419bb33091a';

axios.defaults.params = {
  api_key: apiKey,
};

const fetchMoviesGetTrending = async (page = 1) => {
  const { data } = await axios.get(`/trending/all/day?page=${page}`);
  return data;
};

const fetchMoviesGetSearch = async (search, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?language=en-US&page=${page}&include_adult=false&query=${search}`,
  );
  return data;
};

const fetchMoviesGetDetails = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}?language=en-US`);
  return data;
};

const fetchMoviesGetActors = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits?language=en-US`);
  return data;
};

const fetchMoviesGetReviews = async (movie_id, page = 1) => {
  const { data } = await axios.get(
    `/movie/${movie_id}/reviews?language=en-US&page=${page}`,
  );
  return data;
};

export {
  fetchMoviesGetTrending,
  fetchMoviesGetSearch,
  fetchMoviesGetDetails,
  fetchMoviesGetActors,
  fetchMoviesGetReviews,
};
