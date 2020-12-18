import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemMovie } from './TrendMovieStyle';
import routes from '../../../routes';

const TrendMovie = ({ poster, id, location }) => {
  return (
    <ItemMovie>
      <Link
        to={{
          pathname: `${routes.moviesPage}/${id}`,
          state: { from: location },
        }}
      >
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="poster" />
      </Link>
    </ItemMovie>
  );
};

TrendMovie.propTypes = {
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.object,
};

export default withRouter(TrendMovie);
