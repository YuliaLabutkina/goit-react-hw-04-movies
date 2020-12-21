import PropTypes from 'prop-types';
import { Title, Text } from './ReviewsListItem.styles';

const ReviewsListItem = ({ author, content }) => {
  return (
    <li>
      <Title>Author: {author}</Title>
      <Text>{content}</Text>
    </li>
  );
};

ReviewsListItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};

export default ReviewsListItem;
