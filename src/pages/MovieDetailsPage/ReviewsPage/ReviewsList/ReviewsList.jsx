import PropTypes from 'prop-types';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <ReviewsListItem key={id} author={author} content={content} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
