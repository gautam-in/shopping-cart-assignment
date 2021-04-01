import React from "react";
import "./CartIcon.scss";
import { Link } from "react-router-dom";
import cartLogo from "../../../public/static/images/cart.svg";
import routes from "../../routes/routes";
import { RegisterText, SignInText } from "../../Constants/ConstantText";
import { connect, useSelector } from "react-redux";
import { cartActions, userActions } from "../../_actions";

const CartIcon = ({ cartItem = 0, loggedIn = false, user = {}, logOut, showCart }) => {
  return (
    <section className="header-section">
      <div className="login-options">
        {
          loggedIn ? (
            <>
              <strong aria-label={"Logged in user is" + user.firstName}>Hi {user.firstName}!</strong>
              <Link to={routes.signIn} onClick={logOut} aria-label="logout link">Logout</Link>
            </>
          ) : (
            <>
              <Link to={routes.signIn} aria-label="sign in link">{SignInText}</Link>
              <Link to={routes.register} aria-label="register link" > {RegisterText}</Link>
            </>
          )
        }
      </div>
      <div className="cart" onClick={showCart} role="button" aria-label={"cart item button to open the cart page. Total selected cart item is" + cartItem}>
        <img src={cartLogo} alt={"Cart Icon Logo"} height="30" />
        <p aria-label={"selected cart item total is" + cartItem}>{cartItem} items</p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { authentication, cart } = state;
  const { user, loggedIn } = authentication;
  const { cartItem } = cart;
  return { user, loggedIn, cartItem };
}

const mapDispatchToProps = {
  logOut: userActions.logout,
  showCart: cartActions.showCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
