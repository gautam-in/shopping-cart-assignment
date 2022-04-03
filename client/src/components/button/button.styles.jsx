import styled from 'styled-components';

const primaryRed = '#d10057';

export const BaseButton = styled.button`
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: white;
  color: ${primaryRed};
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${primaryRed};
  color: white;

  &:hover {
    background-color: white;
    color: ${primaryRed};
    border: 1px solid ${primaryRed};
  }
`;
