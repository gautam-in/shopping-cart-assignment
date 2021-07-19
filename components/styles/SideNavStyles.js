import styled from "styled-components";

const SideNavStyles = styled.nav`
  height: 100vh;
  position: fixed;
  background-color: var(--lightestgrey);
  width: var(--sideNavWidth);
  color: var(--grey);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5%;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 767px) {
    display: none;
    position: relative;
    width: 100%;

  }
`;

export default SideNavStyles;
