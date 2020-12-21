import PropTypes from 'prop-types';
import GalleryCastsItem from './GalleryCastsItem';
import { CastsList } from './GalleryCasts.styles';

const GalleryCasts = ({ actors }) => {
  return (
    <CastsList>
      {actors.map(({ profile_path, name, id, character }) => (
        <GalleryCastsItem
          key={id}
          poster={profile_path}
          name={name}
          character={character}
        />
      ))}
    </CastsList>
  );
};

GalleryCasts.propTypes = {
  actors: PropTypes.array.isRequired,
};

export default GalleryCasts;
