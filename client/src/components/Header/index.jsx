import React, { useEffect } from "react";
import Image from "../HtmlElements/Image";
import NavigationLinks from "../NavigationLinks";
import { updateLoginData } from "redux/modules/user";
import CartCount from "../CartCount";

import { Link } from "react-router-dom";

import "./Header.scss";
import { connect } from "react-redux";

const storedEmail = localStorage.getItem("email");

function Header({ updateLoginData, isLoggedIn }) {
  useEffect(() => {
    if (storedEmail) updateLoginData(storedEmail);
  }, []);

  return (
    <div className="Header">
      <Link to="/" className="Header__home">
        <Image
          alt="Logo"
          src="images/logo.png"
          className="Header__HomeLinkImage"
        />
      </Link>
      <div className="Header__Navigation-container">
        <NavigationLinks />
      </div>
      <div className="Header__Last-section">
        <div className="Header__SignIn-Register">
          {isLoggedIn ? (
            <button
              onClick={() => {
                localStorage.clear();
                updateLoginData("");
              }}
            >
              Sign out
            </button>
          ) : (
            <>
              <Link to="/sign-in">Sign In</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
        <CartCount />
      </div>
    </div>
  );
}

export default connect(
  ({ user: { isLoggedIn, email } }) => ({
    userEmail: email,
    isLoggedIn,
  }),
  {
    updateLoginData,
  }
)(Header);
