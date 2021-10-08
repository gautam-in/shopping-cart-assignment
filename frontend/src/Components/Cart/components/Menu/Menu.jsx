import React from "react";
import Svg from "../../../../Helper/SvgComponent";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = (props) => {
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
          <div className="items">
            <Link className="redirectLinks signin-wrapper" to="/login">
              SignIn
            </Link>
          </div>
          <div className="items">
            <Link className="redirectLinks" to="/register">
              Register
            </Link>
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
export default Menu;
