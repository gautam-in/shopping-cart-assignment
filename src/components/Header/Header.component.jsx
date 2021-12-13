import React from "react";
import CartLogo from "../../../static/images/cart.svg";
import {
    AppAuthRoutes,
  AppCartAndAuthHeaders,
  AppLogoContainer,
  AppPageHeaders,
  CartLogoContainer,
  CartLogoSrc,
  HeaderContainer,
  LinkContainer,
} from "./Header.styled.component";
import Logo from "../../../static/images/logo_2x.png";

const Header = () => {
  return (
    <HeaderContainer>
      <AppLogoContainer>
        <img src={Logo} alt="app-logo" />
      </AppLogoContainer>
      <AppPageHeaders>
        <LinkContainer to="/">Home</LinkContainer>
        <LinkContainer to="/products">Products</LinkContainer>
      </AppPageHeaders>
      <AppCartAndAuthHeaders>
        <AppAuthRoutes>
          <LinkContainer to="/sign-up">Register</LinkContainer>
          <LinkContainer to="/login">Signin</LinkContainer>
        </AppAuthRoutes>
        <CartLogoContainer >
          <CartLogoSrc src={CartLogo} />
          <p>0 items</p>
        </CartLogoContainer>
      </AppCartAndAuthHeaders>
    </HeaderContainer>
  );
};

export default Header;
