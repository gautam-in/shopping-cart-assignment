import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import Container from "../container/Container";
import {
  CartContainer,
  HeaderContainer,
  LogoContainer,
  Nav,
  NavContainer,
  NavItem,
  NavMenu,
  NavLink,
  Logo,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <NavContainer>
            <Logo src="/assets/logo.png" alt="Logo" />
            <NavMenu>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/products">Products</NavLink>
              </NavItem>
            </NavMenu>
          </NavContainer>
          <CartContainer>
            <NavMenu>
              <NavItem>
                <NavLink to="/signin">Signin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register">Register</NavLink>
              </NavItem>
            </NavMenu>
            <CartIcon />
          </CartContainer>
        </Nav>
      </Container>
      {/* <CartDropdown /> */}
    </HeaderContainer>
  );
};

export default Header;
