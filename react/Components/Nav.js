import React, { useContext, useState } from 'react';
import '../Styles/nav.css';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import Cart from './cart';

export default function () {
  const { cart } = useContext(CartContext);
  let [cartShow, setCartShow] = useState(false);

  function toggleCart() {
    setCartShow(!cartShow);
  }

  return (
    <nav className="navbar">
      <div className={cartShow ? 'modal' : 'modal close-modal'}>
        <Cart toggleCart={toggleCart} />
      </div>
      <div className="left-nav">
        <img
          className="sbkaBazaarLogo"
          src="../static/images/logo.png"
          alt="Sabka Bazaar Logo"
        />
        <ul className="flow-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <div className="login-links">
          <a href="/login">SignIn</a>
          <a href="/register">Register</a>
        </div>

        <div onClick={toggleCart} className="cart-icon">
          <img
            className="cart-dimension"
            src="../static/images/cart.svg"
            alt="cart image"
          />
          <span className="number-of-items">{cart.length} items</span>
        </div>
      </div>
    </nav>
  );
}
