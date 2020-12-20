import PropTypes from 'prop-types';
import TrendMovie from './TrendMovie';
import { List } from './Gallery.styles';

const Gallery = ({ movies }) => {
  return (
    <List>
      {movies.map(({ poster_path, id }) => (
        <TrendMovie key={id} poster={poster_path} id={id} />
      ))}
    </List>
  );
};

Gallery.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Gallery;
