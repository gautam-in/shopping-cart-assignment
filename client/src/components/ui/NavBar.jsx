import React, { useContext } from "react";

import Cart from "./Cart";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Context as AuthContext } from "../../context/AuthContext";

function NavBar() {
  const { state, logOut } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation()
  return (
    <header>
      <div className="navbar">
        <div className="brand" tabIndex="0">
          <img
            className="brand-logo"
            alt="Website Logo"
            src="/images/logo.png"
            onClick={() => history.push("/")}
          />
        </div>
        <nav style={{ margin: "0px" }}>
          <div className="auth-container">
            <ul className="nav-links">
              <li>
                {state.user == null ? (
                  <Link style={{ color: location.pathname === "/login" && "#d00155" }} to="/login">SignIn</Link>
                ) : (
                  state.user.firstName
                )}
              </li>
              <li>
                {state.user == null ? (
                  <Link style={{ color: location.pathname === "/register" && "#d00155" }} to="/register">Register</Link>
                ) : (
                  <button
                    className="button"
                    onClick={logOut}
                    style={{ margin: 0, fontSize: "1rem", cursor: "pointer" }}
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
          <div className="navg-container">
            <ul className="nav-links">
              <li>
                <Link style={{ color: location.pathname === "/" && "#d00155" }} to="/">Home</Link>
              </li>
              <li>
                <Link style={{ color: location.pathname === "/products" && "#d00155" }} to="/products">Products</Link>
              </li>
            </ul>
            <Cart />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
