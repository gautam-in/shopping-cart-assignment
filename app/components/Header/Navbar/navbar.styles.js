import styled from 'styled-components';

const NavBarStyles = styled.nav`
  flex: 0 0 45%;
  align-self: flex-end;
  color: var(--grey);
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin-right: 1rem;
  }
  li a {
    text-decoration: none;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export default NavBarStyles;
