import styled from "styled-components";

const FooterStyle = styled.footer`
  font-size: 0.8rem;
  background-color: var(--lightgrey);
  position: relative;
  z-index: 1;
  height: var(--footerHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 767px) {
    margin: 0;
    font-size: 0.6rem;
    height: calc(var(--footerHeight) - 10px);
    width: 100%;
  }
`;

export default FooterStyle;
