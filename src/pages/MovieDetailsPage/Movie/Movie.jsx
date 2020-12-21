import PropTypes from 'prop-types';
import {
  Container,
  Image,
  InfoList,
  Title,
  TitleText,
  CapitalText,
} from './Movie.styles';
import defaultImg from '../../../img/not_found.jpg';

const Movie = ({ poster, title, score, overview, genres }) => {
  return (
    <Container>
      <Image
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg}
        alt="poster"
      />
      <InfoList>
        <Title>{title}</Title>
        <TitleText>
          <CapitalText>Score:</CapitalText> {score}
        </TitleText>
        <TitleText>
          <CapitalText>Overview:</CapitalText> {overview}
        </TitleText>
        <TitleText>
          <CapitalText>Ganres:</CapitalText>{' '}
          {genres.map(({ id, name }) => (
            <span key={id}>{name} </span>
          ))}
        </TitleText>
      </InfoList>
    </Container>
  );
};

Movie.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  score: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};

export default Movie;
