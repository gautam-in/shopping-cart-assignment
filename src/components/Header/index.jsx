import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "static/images/logo.png";
import { setProductsCategory } from "../../redux/products/products.action";
import { getCartQuantity } from "../../utils/cart.util";
import Cart from "../Cart";
import {
  HeaderContainer,
  Logo,
  NavButtons,
  CartButton,
  StyledLink,
} from "./header.styles";
import { logout } from "../../redux/user/user.actions";

const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const quantity = getCartQuantity(cartItems);

  return (
    <HeaderContainer>
      {isCartVisible ? (
        <div>
          <Cart setIsCartVisible={setIsCartVisible}></Cart>
        </div>
      ) : null}
      <Logo src={logo} alt="logo" height="60px" />
      <NavButtons>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink
          to="/products"
          onClick={() => {
            dispatch(setProductsCategory(""));
          }}
        >
          Products
        </StyledLink>
      </NavButtons>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        {currentUser ? (
          <StyledLink
            to="/"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Sign Out
          </StyledLink>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 8,
              width: "100px",
            }}
          >
            <StyledLink to="/login">SignIn</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </div>
        )}
        <CartButton>
          <button
            onClick={() => {
              setIsCartVisible((prevState) => !prevState);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              border: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ width: "24", fill: "#bb024d" }}
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {}
            {quantity} item(s)
          </button>
        </CartButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;
