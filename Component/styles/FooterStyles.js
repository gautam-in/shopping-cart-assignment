import styled from "styled-components";

const FooterStyle = styled.footer`
  position: relative;
  z-index: 1;
  font-size: 0.8rem;
  height: var(--footerHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--lightgrey);
  @media only screen and (max-width: 767px) {
    margin: 0;
    font-size: 0.6rem;
    height: calc(var(--footerHeight) - 10px);
    width: 100%;
  }
`;

export default FooterStyle;
