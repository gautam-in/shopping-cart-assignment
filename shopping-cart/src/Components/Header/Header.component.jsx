import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../../App";
import Cart from "../Cart/Cart.component";
import {
  HeaderContainer,
  Nav,
  SigninCart,
  Signin,
  CartContainer,
  CartIcon,
  Option,
  LogoImg,
} from "./Header.styles";

const Header = () => {
  const { USER, setUser } = useContext(UserContext);
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
      ? (document.getElementById("root").style.opacity = "0.3")
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
      <SigninCart>
        <Signin>
          {!USER.userSigned ? (
            <>
              <Option to="/signin">SignIn</Option>
              <Option to="register">Register</Option>
            </>
          ) : (
            <Option
              to="/"
              onClick={() => {
                setUser({ userSigned: false, name: "" });
              }}
            >
              Hi {USER.name + ""}, SignOut
            </Option>
          )}
        </Signin>
        <CartContainer onClick={() => setClose(!cartClose)}>
          <CartIcon />
          <span>{itemsCount} items</span>
        </CartContainer>
      </SigninCart>
      {cartClose && <Cart close={(flag) => setClose(flag)} />}
    </HeaderContainer>
  );
};

export default Header;
