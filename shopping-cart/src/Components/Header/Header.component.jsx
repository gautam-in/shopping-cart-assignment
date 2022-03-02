import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart.component";
import {
  HeaderContainer,
  Nav,
  Signin_Cart,
  Signin,
  CartContainer,
  CartIcon,
  Option,
  LogoImg,
} from "./Header.styles";

const Header = () => {
  const [cartClose, setClose] = useState(false);

  let itemsCount = useSelector((state) =>
    state.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );

  //get window width to adjust cart container based on window size
  let width = window.innerWidth <= 1200 ? true : false;
  useEffect(() => {
    cartClose && !width
      ? (document.getElementById("root").style.opacity = "0.5")
      : (document.getElementById("root").style.opacity = "1");
  }, [cartClose, width]);

  return (
    <HeaderContainer>
      <Option to="/">
        <LogoImg src="/static/images/logo.png" alt="Logo" />
      </Option>
      <Nav>
        <Option to="/">Home</Option>
        <Option to="/shop">Products</Option>
      </Nav>
      <Signin_Cart>
        <Signin>
          <Option to="/signin">SignIn</Option>
          <Option to="register">Register</Option>
        </Signin>
        <CartContainer onClick={() => setClose(!cartClose)}>
          <CartIcon />
          <span>{itemsCount} items</span>
        </CartContainer>
      </Signin_Cart>
      {cartClose && <Cart close={(flag) => setClose(flag)} />}
    </HeaderContainer>
  );
};

export default Header;
