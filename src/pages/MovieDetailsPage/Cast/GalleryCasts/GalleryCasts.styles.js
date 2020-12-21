import styled from 'styled-components';

const CastsList = styled.ul`
  display: grid;
  color: #fff;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 26px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export { CastsList };
