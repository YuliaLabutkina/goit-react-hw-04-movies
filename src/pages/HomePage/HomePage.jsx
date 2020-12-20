import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchMoviesGetTrending } from '../../services/fetchMovies';
import Gallery from '../../components/Gallery';
import PreLoader from '../../components/PreLoader';
import ErrorText from '../../components/ErrorText';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);
    async function fetchMoviesAPI() {
      try {
        const { results } = await fetchMoviesGetTrending();
        if (results.length === 0) {
          setIsLoading(false);
          return toast.error(
            'The list of popular movies is currently not available. Go to the search page please.',
          );
        }
        setTrendingMovies([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (trendingMovies.length === 0) {
      setIsLoading(true);
      fetchMoviesAPI();
    }
  }, [trendingMovies]);

  return (
    <>
      {trendingMovies.length > 0 && <Gallery movies={trendingMovies} />}
      {error && <ErrorText>Whoops, something went wrong. Try again.</ErrorText>}
      {isLoading && <PreLoader />}
    </>
  );
}

export default HomePage;
