import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./layout.scss";
const Cart = React.lazy(() => import("../cart/Cart"));

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
      <nav
        className="app-navbar"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <div className="app-header">
          <div className="app-block left">
            <Link to="/" className="app-logo" itemProp="url">
              <img
                src="/static/images/logo.webp"
                srcSet="/static/images/logo_2x.webp 1.5x, /static/images/logo_2x.webp 2x"
                alt="sabka-bazar-logo"
                loading="lazy"
                width="130"
                height="60"
              ></img>
            </Link>

            <Link to="/" itemProp="url">
              Home
            </Link>
            <Link to="/product" itemProp="url">
              Product
            </Link>
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
                loading="lazy"
              />
              <p>{itemCount} Items</p>
            </button>
          </div>
        </div>
      </nav>
      {cartSatus && (
        <Suspense
          fallback={
            <div className="loader-block">
              <div className="loader"></div>
            </div>
          }
        >
          <Cart status={openCart} />
        </Suspense>
      )}
    </header>
  );
}

export default Navbar;
