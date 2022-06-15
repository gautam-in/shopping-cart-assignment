import React from "react";
import { ReactComponent as CartvSvg } from "../../cart.svg";

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
        <div className={`App max-height-100`} style={{ fill: "#fff", width: "30%" }}>
          <CartvSvg />
        </div>
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
