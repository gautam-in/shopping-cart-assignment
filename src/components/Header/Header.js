import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const [loginState, useLoginState] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("user-status");
    const status = data && JSON.parse(data)?.status;
    useLoginState(status);
  }, []);
  const history = useHistory();

  const logoutClickHandler = () => {
    useLoginState("");
    localStorage.setItem("user-status", "");
  };
  return (
    <header className="container">
      <nav>
        <div className="nav-logo">
          <img
            className="nav-logo-image"
            src="../static/images/logo.png"
            alt="Sabka Bazaar Logo"
            height="60"
            width="120"
            onClick={() => history.push("/")}
          />
        </div>
        <div className="nav-links">
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listing">Products</Link>
            </li>
          </ul>
        </div>
        <div className="nav-cart">
          <ul className="sign-links">
            {!loginState ? (
              <>
                <li>
                  <Link to="/signin">SignIn</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            ) : (
              <li>
                <a onClick={logoutClickHandler}>Logout</a>
              </li>
            )}
          </ul>
          <div className="nav-cart-logo">
            <Link to="/cart">
              <span className="icon-cart"></span>
              <span className="cart-item-count"> 0 Item</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default React.memo(Header);
