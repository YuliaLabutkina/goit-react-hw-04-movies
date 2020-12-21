import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 16px 26px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

const InfoList = styled.div`
  padding: 16px 26px;
`;

const Title = styled.h2`
  font-size: 1.8em;
  color: red;
`;

const TitleText = styled.p`
  line-height: 26px;
  color: #fff;
`;

const CapitalText = styled.span`
  font-weight: bold;
  color: red;
`;

export { Container, Image, InfoList, Title, TitleText, CapitalText };
