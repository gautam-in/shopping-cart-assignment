import React, { useContext } from "react";
import {
  CartItem,
  FlexWrapper,
  Logo,
  Navbar,
  NavItem,
  NavItems,
  NavLink,
  SubNavItems,
} from "./NavBarElements";
import logo from "../../images/logo.png";
import cart from "../../images/cart.svg";
import { CartContext } from "../Context/CartContext";

const NavBar = () => {
  const {
    state: { cart: cartItems },
  } = useContext(CartContext);
  return (
    <Navbar>
      <NavLink to="/">
        <Logo src={logo}></Logo>
      </NavLink>
      <NavItems>
        <FlexWrapper>
          <SubNavItems justify="flex-end">
            <NavItem>
              <NavLink to="/signin" activeStyle={{ fontWeight: 700 }}>
                SignIn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/register" activeStyle={{ fontWeight: 700 }}>
                Register
              </NavLink>
            </NavItem>
          </SubNavItems>
        </FlexWrapper>
        <FlexWrapper>
          <SubNavItems>
            <NavItem>
              <NavLink exact to="/" activeStyle={{ fontWeight: 700 }}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/products" activeStyle={{ fontWeight: 700 }}>
                Products
              </NavLink>
            </NavItem>
          </SubNavItems>
          <CartItem>
            <NavLink exact to="/cart" activeStyle={{ fontWeight: 700 }}>
              <SubNavItems
                customWidth="10rem"
                customPadding="0"
                customGap="1rem"
              >
                <Logo customWidth="2rem" src={cart} />
                <NavItem>{cartItems.length} Items</NavItem>
              </SubNavItems>
            </NavLink>
          </CartItem>
        </FlexWrapper>
      </NavItems>
    </Navbar>
  );
};

export default NavBar;
