import React from "react";
import "./CartIcon.scss";
import { Link } from "react-router-dom";
import cartLogo from "../../../public/static/images/cart.svg";
import routes from "../../routes/routes";

const CartIcon = ({ cartItem = 0 }) => {
  return (
    <section className="header-section">
      <div className="login-options">
        <Link to={routes.signIn}>SignIn</Link>
        <Link to={routes.register}>Register</Link>
      </div>
      <div className="cart">
        <img src={cartLogo} alt={"Cart Icon"} height="30" />
        <p>{cartItem} items</p>
      </div>
    </section>
  );
};

export default CartIcon;
