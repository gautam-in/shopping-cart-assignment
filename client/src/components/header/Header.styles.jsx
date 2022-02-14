import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: end;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: start;
  flex: 1;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`;
export const CartContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
export const NavMenu = styled.ul`
  display: none;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: end;
    /* flex-basis: 2em; */
  }
`;
export const NavItem = styled.li`
  /* display: none; */
  padding-left: 25px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 200px;
`;
