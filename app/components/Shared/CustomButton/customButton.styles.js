import styled from 'styled-components';

const ButtonStyles = styled.button`
  & {
    padding: 0.5rem 1.25rem;
    background-color: ${props => props.theme.magenta};
    color: ${props => props.theme.white};
    outline: none;
    border: 1px solid ${props => props.theme.magenta};
    cursor: pointer;
    box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 40%);
  }
  &:hover{
    opacity:0.9;
  }
  @media only screen and (max-width: 1023px) {
    &::after {
      content: '${(props) => props.additionalText}';
    }
  }
`;

export default ButtonStyles;
