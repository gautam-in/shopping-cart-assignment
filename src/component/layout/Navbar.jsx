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
    <>
      <nav className="app-navbar">
        <div className="app-header">
          <div className="app-block left">
            <Link to="/" className="app-logo">
              <img
                src="/static/images/logo.webp"
                srcSet="/static/images/logo_2x.webp 1.5x, /static/images/logo_2x.webp 2x"
                alt="sabka-bazar-logo"
                loading="lazy"
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
            <div className="app-cartBlock" onClick={openCart}>
              <img
                src="/static/images/cart.svg"
                alt="cart"
                width="30"
                height="30"
                loading="lazy"
              />
              <p>{itemCount} Items</p>
            </div>
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
    </>
  );
}

export default Navbar;
