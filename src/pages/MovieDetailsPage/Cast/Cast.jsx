import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import GalleryCasts from './GalleryCasts';
import ErrorText from '../../../components/ErrorText';
import PreLoader from '../../../components/PreLoader';
import { fetchMoviesGetActors } from '../../../services/fetchMovies';

function Cast() {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);
    async function fetchCastAPI() {
      try {
        const { cast } = await fetchMoviesGetActors(movieId);
        setActors([...cast]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (actors.length === 0) {
      setIsLoading(true);
      fetchCastAPI();
    }
  }, [actors, movieId]);

  return (
    <>
      {actors.length > 0 && <GalleryCasts actors={actors} />}
      {error && <ErrorText>Whoops, something went wrong. Try again.</ErrorText>}
      {isLoading && <PreLoader />}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
