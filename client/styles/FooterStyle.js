import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: var(--lightGray);
  width: 100%;
  div {
    font-size: 0.85rem;
    padding: 10px;
    width: 100%;
    text-align: center;
    margin: 0 auto;

    /* Mediuma and large device */
    @media only screen and (min-width: 769px) {
      font-size: 1rem;
      text-align: left;
      width: var(--containerWidth);
      max-width: var(--maxWidth);
    }
  }
`;
