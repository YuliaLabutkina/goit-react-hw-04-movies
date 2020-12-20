import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ReviewsList from './ReviewsList';
import ErrorText from '../../../components/ErrorText';
import PreLoader from '../../../components/PreLoader';
import { fetchMoviesGetReviews } from '../../../services/fetchMovies';
import NotFound from './ReviewsStyle';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setNotFound(null);
    setError(null);
    async function fetchReviewsAPI() {
      try {
        const { results } = await fetchMoviesGetReviews(id);
        if (results.length === 0) {
          setNotFound("We don't have any reviews for this movies");
          return;
        }
        setReviews([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (reviews.length === 0) {
      setIsLoading(true);
      fetchReviewsAPI();
    }
  }, [reviews, id]);

  return (
    <>
      <ReviewsList reviews={reviews} />
      {notFound && <NotFound>{notFound}</NotFound>}
      {error && <ErrorText>Whoops, something went wrong. Try again.</ErrorText>}
      {isLoading && <PreLoader />}
    </>
  );
};

Reviews.propTypes = {
  id: PropTypes.string,
};

export default Reviews;
