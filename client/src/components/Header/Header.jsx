import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setShowCart } from "../../redux/slices/cartSlice";
import Logo from "./../../assets/images/logo.png";
import Cart from "./../../assets/images/cart.svg";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const showCartHandler = () => {
    dispatch(setShowCart());
  };
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <nav className="navbar">
          <div className="navbar-links">
            <Link to="login">Sign in</Link>
            <Link to="register">Register</Link>
          </div>
          <div className="navbar-container">
            <div className="main-nav">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
            </div>
            <div className="cart-image" onClick={showCartHandler}>
              <img src={Cart} alt="cart" />
              <p>
                {cart.cartTotalQuantity === 1
                  ? `${cart.cartTotalQuantity} item`
                  : `${cart.cartTotalQuantity} items`}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
