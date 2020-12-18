import styled from 'styled-components';

const DetailsPageContainer = styled.div`
  padding: 0 20px;
`;

const CastAndAuthorPageList = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

const CastAndAuthorPageItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Button = styled.button`
  margin-left: 30px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  width: 6em;
  height: 2.5em;
  line-height: 2.4em;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  user-select: none;
  color: #000;
  outline: none;
  border: 1px solid rgba(110, 121, 128, 0.8);
  border-top-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background: rgb(206, 220, 231)
    linear-gradient(rgb(206, 220, 231), rgb(89, 106, 114));
  box-shadow: 0 -1px rgba(10, 21, 28, 0.9) inset,
    0 1px rgba(255, 255, 255, 0.5) inset;
  &:hover {
    background: linear-gradient(#d2dfea, #71828c);
  }
  &:active {
    line-height: 2.6em;
    background: linear-gradient(#bac6cf, #c5d3de 20%, #71828c);
    box-shadow: 0 -1px rgba(255, 255, 255, 0.4) inset;
  }
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    z-index: -1;
    border-radius: 8px;
    background: linear-gradient(
      rgba(200, 200, 200, 0.5),
      rgba(240, 240, 240, 0.5)
    );
  }
`;

export {
  DetailsPageContainer,
  CastAndAuthorPageList,
  CastAndAuthorPageItem,
  Button,
};
