import React from "react";
import { NavLink as Link } from "react-router-dom";
import logo from "../static/images/logo.png";

function Header({ cartCounter }) {
  return (
    <header data-testid="header">
      <div className="container-md mx-auto">
        <div className="row d-md-none d-flex outline">
          <div className="col-6">
            <nav className="guestbar">
              <ul className="guest-links" data-testid="guest-link">
                <li>
                  <Link to="/" className="fs-small" title="Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="fs-small" title="Products">
                    Products
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-6">
            <nav className="guestbar text-right">
              <ul className="guest-links">
                <li>
                  <Link to="/signin" className="fs-small" title="Sign In">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="fs-small" title="Register">
                    Register
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-8 p-0">
            <div className="container-fluid mx-auto d-flex justify-content-start align-items-center">
              <img
                src={logo}
                alt="sabka bazaar logo"
                className="logo"
                width={"100%"}
                height={"100%"}
              />
              <nav className="navbar align-self-end d-md-block d-none">
                <ul className="nav-links fs-large">
                  <li>
                    <Link
                      to={"/"}
                      title={"Homepage"}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      title={"Product page"}
                      to={"/products"}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Products
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="p-0 col-6 col-md-4 d-flex flex-column justify-content-between align-items-end text-end">
            <nav className="guestbar align-self-end d-md-block d-none">
              <ul className="guest-links">
                <li>
                  <Link
                    to={"/signin"}
                    title="Sign In"
                    className={({ isActive }) =>
                      isActive ? "fs-small active" : "fs-small"
                    }
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    title="Register"
                    className={({ isActive }) =>
                      isActive ? "fs-small active" : "fs-small"
                    }
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              type="button"
              data-testid="cart-button"
              className="cart d-flex justify-content-between align-items-center"
              onClick={() => {
                let cartPanel = document.getElementById("cartPanel");
                cartPanel.classList.toggle("active");

                if (cartPanel.classList.contains("active")) {
                  document.body.style.overflow = "hidden";
                } else {
                  document.body.style.overflow = "auto";
                }
              }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>

              <div>
                <span className="counter">{cartCounter}</span>
                <span className="label">items</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
