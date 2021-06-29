import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useViewport } from "../../hooks/useDevice";

const Button = React.lazy(() =>
  import(/* webpackChunkName: "HeaderButtonComponent" */ "../Button")
);
const Text = React.lazy(() =>
  import(/* webpackChunkName: "HeaderTextComponent" */ "../Text")
);

import "./style.scss";

const Header = () => {
  const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
  const { isMobile } = useViewport();

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      this.btn.click();
    }
  };
  return (
    <>
      <header>
        <picture className="logo-container">
          <Link
            aria-label="Sabka Bazaar Logo"
            onKeyPress={handleKeypress}
            tabIndex="0"
            to="/"
          >
            <img
              aria-hidden
              src="/static/images/logo_2x.png"
              alt="Sabka Bazaar Logo"
            />
          </Link>
        </picture>
        <div className="nav-container">
          {!isMobile ? (
            <div className="nav-container__quickLinks">
              <Link
                aria-label="Navigate to signin page"
                to="/login"
                onKeyPress={handleKeypress}
                role="navigation"
                tabIndex="0"
              >
                <Text>SignIn</Text>
              </Link>
              <Link
                aria-label="Navigate to register page"
                to="/register"
                onKeyPress={handleKeypress}
                role="navigation"
                tabIndex="0"
              >
                <Text>Register</Text>
              </Link>
            </div>
          ) : null}
          <div className="nav-container__navigation">
            {!isMobile ? (
              <div className="nav-container__navigation__links">
                <Link
                  aria-label="Navigate to home page"
                  to="/"
                  onKeyPress={handleKeypress}
                  role="navigation"
                  tabIndex="0"
                >
                  <Text>Home</Text>
                </Link>
                <Link
                  aria-label="Navigate to products page"
                  to="/products"
                  onKeyPress={handleKeypress}
                  role="navigation"
                  tabIndex="0"
                >
                  <Text>Products</Text>
                </Link>
              </div>
            ) : null}

            <div className="nav-container__navigation__buttonContainer">
              <Button
                ariaLabel={`You have ${cartItemsCount} items in your cart`}
                className="cartButton"
                role="button"
                tabIndex="0"
              >
                <img src="/static/images/cart.svg" alt="Cart Icon" />
                <Text>{cartItemsCount} items</Text>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
