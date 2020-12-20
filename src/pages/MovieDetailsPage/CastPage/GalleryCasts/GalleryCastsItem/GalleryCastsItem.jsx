import PropTypes from 'prop-types';
import defaultImg from '../../../../../img/not_found.jpg';
import { Item, Title, Img, TextCharacter } from './GalleryCastsItem.styles';

const GalleryCastsItem = ({ poster, name, character }) => {
  return (
    <Item>
      <Img
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg}
        alt="poster"
      />
      <Title>{name}</Title>
      <TextCharacter>Character: {character}</TextCharacter>
    </Item>
  );
};

GalleryCastsItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default GalleryCastsItem;
