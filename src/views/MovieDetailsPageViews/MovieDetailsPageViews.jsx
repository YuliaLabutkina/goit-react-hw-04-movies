import { useState, useEffect, useRef } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import MoviePage from './MoviePage';
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
} from './MovieDetailsPageViewsStyles';

const MovieDetailsPageViews = props => {
  const { match, history, location } = props;
  const { params, url } = match;

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const refPrevPage = useRef(null);
  const refMovieId = useRef();

  useEffect(() => {
    refPrevPage.current = { ...location?.state?.from };
  }, []);

  useEffect(() => {
    refMovieId.current = params.movieId;
  }, []);

  useEffect(() => {
    setError(null);
    if (movie) return;
    setIsLoading(true);
    async function fetchMoviesAPI() {
      try {
        const results = await fetchMoviesGetDetails(refMovieId.current);
        setMovie({ ...results });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMoviesAPI();
  }, [movie]);

  const handleGoBack = () => {
    if (Object.keys(refPrevPage.current).length === 0) {
      return history.push(routes.home);
    }
    history.push(refPrevPage.current);
  };

  return (
    <DetailsPageContainer>
      {movie && (
        <>
          <Button onClick={handleGoBack} type="button">
            Go back
          </Button>
          <MoviePage
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
        <Route
          path={routes.castPage}
          render={() => <Cast id={refMovieId.current} />}
        />
        <Route
          path={routes.reviews}
          render={() => <Reviews id={refMovieId.current} />}
        />
      </Switch>
    </DetailsPageContainer>
  );
};

export default MovieDetailsPageViews;
