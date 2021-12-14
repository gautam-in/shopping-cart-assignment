import React from "react";
import CartLogo from "../../../static/images/cart.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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
import { cartItemTotalCount } from "../../redux/cart_reducer/cart.selectors";
import { useNavigate } from "react-router-dom";

const Header = ({ count = 0 }) => {

  const navigate = useNavigate();

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
        <CartLogoContainer>
          <CartLogoSrc src={CartLogo} onClick={()=>navigate("/shopping-cart")} />
          <p>{count} items</p>
        </CartLogoContainer>
      </AppCartAndAuthHeaders>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  count: cartItemTotalCount,
});

export default connect(mapStateToProps)(Header);
