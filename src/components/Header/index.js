import React from "react";
import { Link } from "react-router-dom";
import { useViewport } from "../../hooks/useDevice";

import Button from "../Button";
import Text from "../Text";

import "./style.scss";

const Header = () => {
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
            to="/"
            aria-labelledby="Sabka Bazaar Logo"
            onKeyPress={handleKeypress}
          >
            <img
              src="/static/images/logo_2x.png"
              alt="Sabka Bazaar Logo"
              tabIndex="1"
            />
          </Link>
        </picture>
        <div className="nav-container">
          {!isMobile ? (
            <div className="nav-container__quickLinks">
              <Link to="/login" onKeyPress={handleKeypress}>
                <Text tabIndex="2" ariaLabel="SignIn to Sabka Bazaar">
                  SignIn
                </Text>
              </Link>
              <Link to="/register" onKeyPress={handleKeypress}>
                <Text tabIndex="3" ariaLabel="Register to Sabka Bazaar">
                  Register
                </Text>
              </Link>
            </div>
          ) : null}
          <div className="nav-container__navigation">
            {!isMobile ? (
              <div className="nav-container__navigation__links">
                <Link to="/" onKeyPress={handleKeypress}>
                  <Text tabIndex="4" ariaLabel="Navigate to Home Page">
                    Home
                  </Text>
                </Link>
                <Link to="/products" onKeyPress={handleKeypress}>
                  <Text tabIndex="5" ariaLabel="Navigate to Products Page">
                    Products
                  </Text>
                </Link>
              </div>
            ) : null}

            <div className="nav-container__navigation__buttonContainer">
              <Button className="cartButton">
                <img src="static/images/cart.svg" alt="Cart Icon" aria-hidden />
                <Text ariaLabel={`You have 0 items in your Cart`}>0 items</Text>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
