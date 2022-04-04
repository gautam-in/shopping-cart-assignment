import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(props) {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <nav className="nav">
      <section className="nav-logo">
        <img
          src="/static/images/logo_2x.png"
          className="nav-logo-img"
          alt="Sabka Bazaar"
        />
      </section>
      <section className="nav-links">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
        </ul>
      </section>
      <section className="nav-carts-auth">
        <div className="nav-auth">
          <ul>
            <li>
              <Link className="nav-link" to="/signin">
                SignIn
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-carts" onClick={() => props.showHideCartModal()}>
          <img
            src="/static/images/cart.svg"
            className="cart-icon"
            alt="Cart Icon"
            width="35"
          />
          <span className="cart-item-count">{cartItems.length} items</span>
        </div>
      </section>
    </nav>
  );
}
