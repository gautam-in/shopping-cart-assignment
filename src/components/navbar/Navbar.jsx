import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
const Cart = React.lazy(() => import("../cart/Cart"));

export default function Navbar() {
  const [cartStatus, setCartStatus] = useState(false);
  const openCart = (status) => {
    setCartStatus(!status);
  };
  const itemCount = useSelector(
    (state) => state.getCartDetails.cartItems.length
  );
  return (
    <div>
    <header>
      <nav
        className="navbar-container">
        <div className="app-header">
          <div className="navbar-header left">
            <Link to="/" className="app-logo" itemProp="url">
              <img
                src="static/images/logo.png"
                srcSet="/static/images/logo_2x.png 1.5x, /static/images/logo_2x.png 2x"
                alt="sabkaBazar_logo"
                width="130"
                height="60"
                loading="lazy"
              ></img>
            </Link>

            <Link to="/" itemProp="url">
              Home
            </Link>
            <Link to="/product" itemProp="url">
              Product
            </Link>
          </div>
          <div className="navbar-header right">
            <ul className="app-auth">
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/signUp">Register</Link>
              </li>
            </ul>
            <button
              className="cart-container"
              onClick={() => {
                openCart(cartStatus);
              }}>
              <img
                src="/static/images/cart.svg"
                alt="cart"
                width="30"
                height="30"
                loading="lazy"
              />
              <p>{itemCount} Items</p>
            </button>
          </div>
        </div>
      </nav>
      {cartStatus && (
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          }
        >
          <Cart openCart={openCart} />
        </Suspense>
      )}
    </header>
    </div>
  );
}