import React, { useState, useContext, useEffect } from "react";
import "../styles/header.scss";
import Cart from "./Cart";
import CartContext from "../store/cart-context";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const cartContextData = useContext(CartContext);
  const navigate = useNavigate();
  const { items } = cartContextData;
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    setButtonHighlighted(true);
    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const buttonClasses = `cart-img ${buttonHighlighted ? "bump" : ""}`;
  const numberOfItems = items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const openCart = () => {
    if (window.innerWidth > 960) {
      setShowCart(true);
      return;
    }
    navigate("/cart", { replace: true });
  };
  const closeCart = (e) => {
    setShowCart(false);
  };
  return (
    <nav className="app-header">
      <div className="logo" onClick={() => navigate("/", { replace: true })}>
        <img src="/static/images/logo_2x.png" alt="www.sabkabazaar.com" />
      </div>
      <div className="nav-links nav_links_header">
        <NavLink to="/">
          {" "}
          <span>Home</span>
        </NavLink>
        <NavLink to="/products/">
          {" "}
          <span>Products</span>
        </NavLink>
      </div>
      <div>
        <div className="nav-links">
          <NavLink to="/login">
            {" "}
            <span>Sign In</span>
          </NavLink>
          <NavLink to="/register">
            {" "}
            <span>Register</span>
          </NavLink>
        </div>
        <div className={buttonClasses} onClick={() => openCart()}>
          <div className="img-class">
            <img src="/static/images/cart.svg" alt="cart icon" />
          </div>
          <span>{`${numberOfItems} items`}</span>
        </div>
        {showCart ? <Cart closeCart={closeCart} /> : null}
      </div>
    </nav>
  );
};

export default Header;
