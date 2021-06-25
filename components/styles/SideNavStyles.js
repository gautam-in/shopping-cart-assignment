import styled from "styled-components";

const SideNavStyles = styled.nav`
  display: block;
  height: 100vh;
  position: fixed;
  background-color: var(--lightestgrey);
  width: var(--sideNavWidth);
  color: var(--grey);
  font-size: 0.8rem;
  font-weight: 600;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  /* @media only screen and (max-width: 767px) {
    display: none;
  } */
`;

export default SideNavStyles;
