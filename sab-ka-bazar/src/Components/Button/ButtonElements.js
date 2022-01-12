import styled from "styled-components";

const Button = styled.button`
  background-color: #d00256;
  color: #fff;
  padding: ${(props) =>
    props.customPadding ? props.customPadding : "1.5rem 2.5rem"};
  margin: ${(props) => (props.customMargin ? props.customMargin : "")};
  border: none;
  font-size: 1.6rem;
  font-family: inherit;
  cursor: pointer;

  @media only screen and (max-width: 650px) {
    & {
      padding: 1.5rem;
      margin: 2rem 0;
    }
  }

  @media only screen and (max-width: 499px) {
    & {
      margin: 0.5rem 0;
      padding: 0.8rem;
    }
  }
`;

export { Button };
