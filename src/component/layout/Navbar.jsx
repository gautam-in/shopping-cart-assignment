import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./layout.scss";
import Cart from "../cart/Cart";

function Navbar() {
  const [cartSatus, setcartSatus] = useState(false);
  const openCart = (status) => {
    status !== Boolean ? setcartSatus(status) : setcartSatus(true);
  };
  const itemCount = useSelector(
    (state) => state.getCartDetail.cartItems.length
  );
  return (
    <header>
      <nav className="app-navbar">
        <div className="app-header">
          <div className="app-block left">
            <Link to="/" className="app-logo">
              <img
                src="/static/images/logo.webp"
                alt="sabka-bazar-logo"
                width="130"
                height="60"
              ></img>
            </Link>

            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
          </div>
          <div className="app-block right">
            <ul className="app-auth">
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/signUp">Register</Link>
              </li>
            </ul>
            <button className="app-cartBlock" onClick={openCart}>
              <img
                src="/static/images/cart.svg"
                alt="cart"
                width="30"
                height="30"
              />
              <p>{itemCount} Items</p>
            </button>
          </div>
        </div>
      </nav>
      {cartSatus && <Cart status={openCart} />}
    </header>
  );
}

export default Navbar;
