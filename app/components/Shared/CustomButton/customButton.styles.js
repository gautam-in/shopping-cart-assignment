import styled from 'styled-components';

const ButtonStyles = styled.button`
  & {
    padding: 0.5rem 1.25rem;
    background-color: ${props => props.theme.magenta};
    color: ${props => props.theme.white};
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media only screen and (max-width: 1023px) {
    &::after {
      content: '${(props) => props.additionalText}';
    }
  }
`;

export default ButtonStyles;
