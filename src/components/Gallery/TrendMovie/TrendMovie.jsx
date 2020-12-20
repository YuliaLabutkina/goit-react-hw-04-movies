import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemMovie } from './TrendMovie.styles';
import routes from '../../../routes';
import defaultImg from '../../../img/not_found.jpg';

const TrendMovie = ({ poster, id, location }) => {
  return (
    <ItemMovie>
      <Link
        to={{
          pathname: `${routes.moviesPage}/${id}`,
          state: { from: location },
        }}
      >
        <img
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg
          }
          alt="poster"
        />
      </Link>
    </ItemMovie>
  );
};

TrendMovie.propTypes = {
  poster: PropTypes.string,
  id: PropTypes.number.isRequired,
  location: PropTypes.object,
};

export default withRouter(TrendMovie);
