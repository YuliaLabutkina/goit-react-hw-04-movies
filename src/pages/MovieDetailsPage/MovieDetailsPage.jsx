import { useState, useEffect, useRef } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Movie from './Movie';
import Cast from './Cast';
import Reviews from './Reviews';
import PreLoader from '../../components/PreLoader';
import ErrorText from '../../components/ErrorText';
import routes from '../../routes';
import { fetchMoviesGetDetails } from '../../services/fetchMovies';
import {
  CastAndAuthorPageList,
  CastAndAuthorPageItem,
  DetailsPageContainer,
  Button,
} from './MovieDetailsPage.styles';

function MovieDetailsPage(props) {
  const { match, history, location } = props;
  const {
    params: { movieId },
    url,
  } = match;

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const refPrevPage = useRef();

  useEffect(() => {
    if (location.state && location.state.from) {
      refPrevPage.current = { ...location.state.from };
    }
  }, []);

  useEffect(() => {
    setError(null);
    if (movie) return;
    setIsLoading(true);
    async function fetchMoviesAPI() {
      try {
        const results = await fetchMoviesGetDetails(movieId);
        setMovie({ ...results });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMoviesAPI();
  }, [movie, movieId]);

  const handleGoBack = () => {
    if (refPrevPage && refPrevPage.current) {
      return history.push(refPrevPage.current);
    }
    history.push(routes.home);
  };

  return (
    <DetailsPageContainer>
      {movie && (
        <>
          <Button onClick={handleGoBack} type="button">
            Go back
          </Button>
          <Movie
            poster={movie.poster_path}
            title={movie.original_title}
            score={movie.vote_average}
            overview={movie.overview}
            genres={movie.genres}
          />
          <CastAndAuthorPageList>
            <CastAndAuthorPageItem>
              <NavLink
                onClick={() =>
                  history.push(history.location?.state?.from || routes.home)
                }
                to={`${url}/cast`}
                className="navLink"
                activeClassName="navLink--active"
              >
                Cast
              </NavLink>
            </CastAndAuthorPageItem>
            <CastAndAuthorPageItem>
              <NavLink
                onClick={() =>
                  history.push(history.location?.state?.from || routes.home)
                }
                to={`${url}/reviews`}
                className="navLink"
                activeClassName="navLink--active"
              >
                Reviews
              </NavLink>
            </CastAndAuthorPageItem>
          </CastAndAuthorPageList>
        </>
      )}
      {error && <ErrorText>Whoops, something went wrong. Try again.</ErrorText>}
      {isLoading && <PreLoader />}

      <Switch>
        <Route path={routes.castPage} component={Cast} />
        <Route path={routes.reviews} component={Reviews} />
      </Switch>
    </DetailsPageContainer>
  );
}

export default MovieDetailsPage;
