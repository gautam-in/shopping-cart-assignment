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
      <section className={cartShow ? 'modal' : 'modal close-modal'}>
        <Cart toggleCart={toggleCart} />
      </section>
      <section className="left-nav">
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
      </section>
      <section className="right-nav">
        <ul className="login-links">
          <li>
            <Link to="/login">SignIn</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <button onClick={toggleCart} className="cart-icon">
          <img
            className="cart-dimension"
            src="../static/images/cart.svg"
            alt="cart image"
          />
          <span className="number-of-items">{cart.length} items</span>
        </button>
      </section>
    </nav>
  );
}
