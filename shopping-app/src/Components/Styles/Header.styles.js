import styled from "styled-components";
import { NavLink as RLink } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 1rem;
`;

const Container = styled.div`
  background-color: ${(props) => (props.bg ? props.bg : "")};
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 10px 10px -5px #ccc;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 10rem;
  background-color: #fff;
  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 999px) {
    & {
      padding: 0.5rem;
    }
  }

  @media only screen and (max-width: 599px) {
    & {
      height: auto;
      flex-direction: row;
    }
    & > a {
      align-self: center;
    }

    & > a > img {
      width: 12rem;
    }
  }
`;

const Logo = styled.img`
  width: ${(props) => (props.customWidth ? props.customWidth : "auto")};
`;

const NavItems = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  color: #d00256;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;

const NavItem = styled.li`
  color: inherit;
  font-size: inherit;
`;

const NavLink = styled(RLink)`
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
`;

const SubNavItems = styled(NavItems)`
  width: ${(props) => (props.customWidth ? props.customWidth : "")};
  padding: ${(props) =>
    props.customPadding ? props.customPadding : "0 0 0 10rem"};
  flex-direction: row;
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  gap: ${(props) => (props.customGap ? props.customGap : "2.5rem")};

  @media only screen and (max-width: 499px) {
    & {
      padding: 0.5rem;
    }
  }
`;

const CartItem = styled.li`
  background-color: #e5e5e5;
  padding: 1rem 2rem;
  margin-top: 1.7rem;

  @media only screen and (max-width: 499px) {
    & {
      margin-top: 0.3rem;
      align-self: center;
      padding: 0.5rem;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  width: 100%;

  @media only screen and (max-width: 499px) {
    & {
      flex-direction: column;
      width: auto;
    }
  }
`;

export {
  Navbar,
  Logo,
  NavItems,
  NavItem,
  SubNavItems,
  CartItem,
  NavLink,
  FlexWrapper,
  Container,
  Wrapper,
};
