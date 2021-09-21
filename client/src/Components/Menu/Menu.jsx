/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/display-name */
import React from "react";
import Svg from "../../Helper/SvgComponent";

import "./Menu.scss";

export default (props) => {
  const { loggedin, toggleMenu, toggleCart, cart, handleLogout } = props;
  const handleClose = () => {
    toggleMenu();
  };
  return (
    <div className="menu-container">
      <div
        onClick={handleClose}
        className="cart-icon items"
        onClick={toggleCart}
      >
        <Svg name="cart" style={{ fill: "#fff", width: "30%" }} />
        <span className="item">{" " + cart.length + " "}items</span>
      </div>
      {!loggedin ? (
        <>
          <div onClick={handleClose} className="items">
            SignIn
          </div>
          <div onClick={handleClose} className="items">
            Register
          </div>
        </>
      ) : (
        <div onClick={handleLogout} className="items">
          Logout
        </div>
      )}
    </div>
  );
};
