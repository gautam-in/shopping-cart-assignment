import styled from 'styled-components';

const white = '#ffffff';
const primaryRed = '#d10057';

export const BaseButton = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 3.125rem;
  letter-spacing: 0.5px;
  line-height: 3.125rem;
  padding: 0 2.18rem 0 2.18rem;
  font-size: 1rem;
  background-color: ${white};
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
    background-color: ${white};
    color: black;
    border: 1px solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: ${primaryRed};
  color: ${white};
  margin: 0 auto;

  &:hover {
    background-color: ${white};
    color: ${primaryRed};
    border: 1px solid ${primaryRed};
  }
`;
