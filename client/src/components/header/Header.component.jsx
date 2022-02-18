import React, { useContext } from "react";
import { GlobalState } from "../../context/reducers/cart-reducer";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart/cart.component";
import Container from "../container/Container";
import {
  CartContainer,
  HeaderContainer,
  Nav,
  NavContainer,
  NavItem,
  NavMenu,
  NavLink,
  Logo,
} from "./Header.styles";

const Header = () => {
  const {
    state: { toggle },
  } = useContext(GlobalState);
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
            {toggle && <Cart />}
          </CartContainer>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
