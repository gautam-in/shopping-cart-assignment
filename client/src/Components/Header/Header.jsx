import React from "react";
import { Link } from "react-router-dom";
import Svg from "Helper/SvgComponent";

import "./Header.scss";

export default (props) => {
  const { showLogin = true } = props;
  return (
    <section className="header-section">
      <div className="maincontainer">
        <div className="logo">
          <img src="/images/logo.png" className="logo" alt="" />
        </div>
        <div className="heading-menu">
          <h3>Home</h3>
          <h3>Products</h3>
        </div>
        <div className="cart-signin">
          <div className="signin">
            {showLogin && (
              <>
                <Link className="links" to="/">
                  SignIn
                </Link>
                <Link className="links" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="cart-icon">
            <Svg name="cart" style={{ fill: "#970000", width: "30%" }} />
            <span className="item">{0 + " "}items</span>
          </div>
        </div>
      </div>
    </section>
  );
};
