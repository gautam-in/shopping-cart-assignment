import styled from "styled-components";

const FooterElement = styled.footer`
  height: 5rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  width: 100%;

  @media only screen and (max-width: 769px) {
    & {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 599px) {
    & {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;
export { FooterElement };
