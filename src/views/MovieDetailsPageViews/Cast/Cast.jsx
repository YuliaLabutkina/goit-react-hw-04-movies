import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import GalleryCasts from './GalleryCasts';
import ErrorText from '../../../components/ErrorText';
import PreLoader from '../../../components/PreLoader';
import { fetchMoviesGetActors } from '../../../services/fetchMovies';

function Cast({ id }) {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);
    async function fetchCastAPI() {
      try {
        const { cast } = await fetchMoviesGetActors(id);
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
  }, [actors, id, isLoading]);

  return (
    <>
      {actors.length > 0 && <GalleryCasts actors={actors} />}
      {error && <ErrorText>Whoops, something went wrong. Try again.</ErrorText>}
      {isLoading && <PreLoader />}
    </>
  );
}

Cast.propTypes = {
  id: PropTypes.string,
};

export default Cast;
