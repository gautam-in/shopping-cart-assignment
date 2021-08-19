import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({ cart, setCartOpen }) => {
  const noOfItems = Object.values(cart).reduce((acc, curr) => acc + curr, 0);
  console.log(cart, noOfItems);
  return (
    <div className="shadow">
      <header className="header">
        <img
          src="/static/images/logo.png"
          className="brand_logo"
          alt="Sabka Bazaar Logo"
        />
        <Link to="/" className="home_link">
          Home
        </Link>
        <Link to="/product_listing" className="product_link">
          Products
        </Link>
        <div className="container_right">
          <div className="container_signIn">
            <Link className="signIn_link">SignIn</Link>
            <Link className="register_link">Register</Link>
          </div>
          <button
            href=""
            className="cart_icon_link"
            onClick={() => setCartOpen(true)}
          >
            <img
              className="cart_icon"
              src="/static/images/cart.svg"
              alt="Cart"
            />
            {noOfItems}
            <span className="itemsText">items</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
