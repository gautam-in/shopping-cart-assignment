import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Cart from "../Cart/Cart.component";
import "./header.scss";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const { item } = useSelector((state) => state);
  const history = useHistory();

  const handleRedirect = useCallback(
    (route) => () => history.push(route),
    [history]
  );

  const toggleCart = useCallback(() => setOpenCart(!openCart), [openCart]);

  return (
    <header>
      <div className="navigation" role="navigation">
        <div onClick={handleRedirect("/")}>
          <img className="w-1" src="static/images/logo.png" alt="logo" />
        </div>
        <nav>
          <ul className="d-flex">
            <li>
              <button onClick={handleRedirect("/")}>Home</button>
            </li>
            <li>
              <button onClick={handleRedirect("/products")}>Products</button>
            </li>
          </ul>
        </nav>
        <div className="cart-login-container">
          <nav>
            <ul className="list-h d-flex">
              <li className="link">
                <button onClick={handleRedirect("/login")}>Sign In</button>
              </li>
              <li className="link">
                <button onClick={handleRedirect("/register")}>Register</button>
              </li>
            </ul>
          </nav>
          <button className="btn-cart" onClick={toggleCart}>
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
            <Cart closeCart={toggleCart} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
