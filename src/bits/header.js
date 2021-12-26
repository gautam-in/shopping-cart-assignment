import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/selectors/user";
import { selectCartHidden } from "../redux/selectors/cart";
import { auth } from "../firebase/firebase";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";
import "./styles/header.css";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <div className="no-options">
        <Link to="/">
          <img
            className="logo"
            src="static/images/logo.png"
            alt="logo"
            width="150px"
          />
        </Link>
      </div>
      <div className="optionsStart">
        {" "}
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/shop">
          <h3>Products</h3>
        </Link>
      </div>
      <div className="options">
        {currentUser ? (
          <h3 className="option" onClick={() => auth.signOut()}>
            Sign Out
          </h3>
        ) : (
          <>
            <Link className="option" to="/signIn">
              <h3>Sign In</h3>
            </Link>
            <Link className="option" to="/register">
              <h3>Register</h3>
            </Link>
          </>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
