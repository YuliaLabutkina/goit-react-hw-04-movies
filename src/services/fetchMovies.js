import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '81f248d3c9154788229a5419bb33091a';

const fetchMoviesGetTrending = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/all/day?api_key=${apiKey}&page=${page}`,
  );
  return data;
};

const fetchMoviesGetSearch = async (search, page = 1) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false&query=${search}`,
  );
  return data;
};

const fetchMoviesGetDetails = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}?api_key=${apiKey}&language=en-US`,
  );
  return data;
};

const fetchMoviesGetActors = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/credits?api_key=${apiKey}&language=en-US`,
  );
  return data;
};

const fetchMoviesGetReviews = async (movie_id, page = 1) => {
  const { data } = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${apiKey}&language=en-US&page=${page}`,
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
