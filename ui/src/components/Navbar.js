import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const cart = useContext(CartContext);
  return (
    <div>
      <nav className="Navbar-container">
        <div className="Navbar-item">
          <Link className="Navbar-item" to="/">
            <img
              src="/static/images/logo_2x.png"
              alt="Sabka Bazaar"
              height="70"
              width="auto"
            />
          </Link>
          <Link className="Navbar-item lg-scrn" to="/">
            Home
          </Link>
          <Link className="Navbar-item lg-scrn" to="/plp">
            Products
          </Link>
        </div>
        <div >
          <Link className="Navbar-item" to="/cart">
            {/* <i className="bi bi-cart3" style={{margin: '3px', fontSize: '1.2em', color: 'red'}}></i> */}
            <img
              src="\static\images\cart.svg"
              alt="cart icon"
              className="cart-logo"
            ></img>
            {cart.itemCount} Items
          </Link>
        </div>
      </nav>
    </div>
  );
}
