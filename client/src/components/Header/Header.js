import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductsSuccess } from "../../containers/Products/ProductActions";
import { getLogoutStart } from "../../containers/Login/LoginActions";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
  }, [location.pathname]);
  useEffect(() => {
    dispatch(getProductsSuccess());
  }, []);

  const {
    product: { cartItems = [] },
    login: { isLoggedIn = false },
  } = useSelector((state) => state);

  // logout
  const handleLogout = () => {
    dispatch(getLogoutStart());
    history.push("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-left">
          <NavLink to="/" className="logo">
            <img loading="lazy" src="static/images/logo.png" alt="" />
          </NavLink>
        </div>

        {isMenuOpen && (
          <div className="overlay-block" onClick={toggleMenu}></div>
        )}
        <div className="header-right mobile">
          <NavLink to="/cart" className="nav-link ml-auto">
            <img loading="lazy" src="static/images/cart.svg" alt="" />
            {cartItems && cartItems.length > 0 ? cartItems.length : 0} Items
          </NavLink>
          <div className="nav-link" onClick={toggleMenu}>
            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 612 612"
              style={{ enableBackground: "new 0 0 612 612" }}
            >
              <g>
                <g id="_x33__6_">
                  <g>
                    <path
                      d="M581.4,520.199H30.6c-16.891,0-30.6,13.709-30.6,30.6C0,567.691,13.709,581.4,30.6,581.4h550.8
				c16.891,0,30.6-13.709,30.6-30.602C612,533.908,598.291,520.199,581.4,520.199z M30.6,91.799h550.8
				c16.891,0,30.6-13.708,30.6-30.6c0-16.892-13.709-30.6-30.6-30.6H30.6C13.709,30.6,0,44.308,0,61.2
				C0,78.091,13.709,91.799,30.6,91.799z M581.4,275.399H30.6C13.709,275.399,0,289.108,0,306s13.709,30.6,30.6,30.6h550.8
				c16.891,0,30.6-13.709,30.6-30.6S598.291,275.399,581.4,275.399z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className={`header-right desktop ${isMenuOpen ? "active" : ""}`}>
          <nav className="header-right-top">
            {isLoggedIn ? (
              <a className="nav-link " onClick={handleLogout}>
                Logout
              </a>
            ) : (
              <>
                <NavLink to="/login" className="nav-link ">
                  Login
                </NavLink>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </>
            )}
          </nav>
          <nav className="header-right-bottom">
            <NavLink to="/home" className="nav-link ">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link ">
              Products
            </NavLink>
            <NavLink to="/cart" className="nav-link ml-auto">
              <img loading="lazy" src="static/images/cart.svg" alt="" />
              {cartItems && cartItems.length > 0 ? cartItems.length : 0} Items
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
