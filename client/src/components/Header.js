import React , { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo_2x.png"
import Cart from "../images/cart.svg"
import {userLoginRequest, userLogoutRequest} from "../redux";

import { setShowCart } from "../redux";
import "../styles/header.scss"


export default function Header() {
const loginState = useSelector((state) => state.user.logged);
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart);
const history = useHistory();


useEffect(() => {
    const data = localStorage.getItem("user-status");
    const status = data && JSON.parse(data)?.status;
    if (status) {
      dispatch(userLoginRequest());
    }
  }, []);

  const logoutClickHandler = () => {
    dispatch(userLogoutRequest());
    localStorage.setItem("user-status", "");
  };

  const showCartHandler = () => {
  dispatch(setShowCart());
  };

  return (
    <div className="header">
   {console.log(loginState, "....???")}
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            onClick={() => history.push("/")}
          />
        </Link>
      </div>

      <div className="page-links">
        <Link className="link" to="/">
          <h3>Home</h3>
        </Link>
        <Link className="link" to="/products">
          <h3>Products</h3>
        </Link>

        <div onClick={showCartHandler} className="cart">
          <div className="cart-image" >
            <img src={Cart} alt="" />
            {console.log(cart.cartTotalQuantity, "cartTotalQuantity")}
            <p>{cart.cartTotalQuantity} Items</p>
          </div>
        </div>
      </div>

      <div className="login-links">
      {!loginState ? (
              <>
                <Link to="/signin">
                <h3>SignIn</h3>
                </Link>
                <Link to="/register">
                <h3>Register</h3>
                </Link>
              </>
            ) : (
              <Link onClick={logoutClickHandler}>
                 <h3>Logout</h3>
              </Link>
        )}  
      </div>
    </div>
  );
}