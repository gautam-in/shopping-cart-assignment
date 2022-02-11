import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import './header.styles.scss';
import Cart from "../Cart/cart.component";
import '../Cart/cart.styles.scss';

function Header() {
  const [openCart, setOpenCart] = React.useState(false);
  const { item } = useSelector((state) => state);

  return (
    <header>
      <div className="navigation" role="navigation">
        <a href="/index.html" rel="home">
          <img className="logo-img" src="static/images/logo.png" alt="logo" />
        </a>
        <nav>
          <ul className="list-n">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
        </nav>
        <div className="cart-login-container">
          <nav>
            <ul className="list-h">
              <li className="link">
              <Link to='/login'>SignIn</Link>
              </li>
              <li className="link">
              <Link to='/register'>Register</Link>
              </li>
            </ul>
          </nav>
          <button
            className="btn-cart"
            onClick={() => {
              setOpenCart(true);
            }}
          >
            <img
              src="static/images/cart.svg"
              alt="cart icon"
              className="icon"
              id="outside"
            />
            <span className="text" id="cart-items">
              {item} Items
            </span>
          </button>
          <div
            id="desktop-cart"
            className="cart-main-cont"
            style={{ display: openCart ? "block" : "none" }}
          >
            <Cart closeCart={setOpenCart} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;