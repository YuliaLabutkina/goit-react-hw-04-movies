import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  background-color: #545454;
  border-radius: 5px;
  padding: 6px 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  transition: transform 400ms linear, box-shadow 200ms linear;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.32);
  }
`;

const Title = styled.h3`
  text-align: center;
`;

const Img = styled.img`
  object-fit: cover;
`;

const TextCharacter = styled.p`
  font-size: 14px;
`;

export { Item, Title, Img, TextCharacter };
