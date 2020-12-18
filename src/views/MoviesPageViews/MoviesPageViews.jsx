import { useState, useEffect } from 'react';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchMoviesGetSearch } from '../../services/fetchMovies';
import Searchbar from '../../components/Searchbar';
import Gallery from '../../components/Gallery';
import PreLoader from '../../components/PreLoader';
import ErrorText from '../../components/ErrorText';

function MoviesPageViews(props) {
  const { location, history } = props;

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = query => {
    setSearch(query);
    setMovies([]);
    setIsLoading(true);
    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (!location.search) return;
    const { query: userSearch } = queryString.parse(location.search);
    setSearch(userSearch);
  }, []);

  useEffect(() => {
    setError(null);
    if (!search) return;
    async function fetchMoviesAPI() {
      try {
        const { results } = await fetchMoviesGetSearch(search);
        if (results.length === 0) {
          setIsLoading(false);
          return toast.error(
            'No results were found for your request! Try again!',
          );
        }
        setMovies([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (movies.length === 0) fetchMoviesAPI();
  }, [movies, search]);

  return (
    <>
      <Searchbar onSubmitForm={onSubmitForm} />
      {movies.length > 0 && <Gallery movies={movies} />}
      {error && <ErrorText>Whoops, something went wrong. Try again.</ErrorText>}
      {isLoading && <PreLoader />}
    </>
  );
}

export default MoviesPageViews;
