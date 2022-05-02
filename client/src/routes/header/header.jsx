import React, { Fragment, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import "./header.css";
import Cart from "../../components/cart/cart";
import { useDispatch } from "react-redux";
import { closeCart } from "../../store/actions";

const mobileNavRoutes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Products",
    route: "/products",
  },
  {
    name: "Sign in",
    route: "/sign-in",
  },
  {
    name: "Register",
    route: "/sign-up",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const clickNavHandler = () => {
    setMobileNav(false);
    dispatch(closeCart());
  };
  const [mobileNav, setMobileNav] = useState(false);
  const MobileNav = () => {
    return (
      <nav
        className={mobileNav ? "mobile-nav nav-open" : "mobile-nav nav-close"}
      >
        <ul>
          {mobileNavRoutes.map((item, index) => (
            <li key={index} onClick={() => clickNavHandler()}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <Fragment>
      <header className="header-wrapper">
        <div className="header-content">
          <div className="logo-container">
            <div
              className="mobile-nav-icon-box"
              onClick={() => setMobileNav(!mobileNav)}
            >
              {mobileNav ? (
                <ion-icon
                  className="menu-nav-icon"
                  name="close-outline"
                ></ion-icon>
              ) : (
                <ion-icon
                  className="menu-nav-icon"
                  name="menu-outline"
                ></ion-icon>
              )}
            </div>
            <Link to="/">
              <img src={Logo} alt="sabka bazar logo" className="logo" />
            </Link>
            <div className="left-nav">
              <ul className="left-nav-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          </div>
          <nav className="main-nav">
            <div className="right-nav">
              <ul className="right-nav-list">
                <li>
                  <Link to="/sign-in"> Sign in</Link>
                </li>
                <li>
                  <Link className="link-to-register" to="/sign-up">
                    Register
                  </Link>
                </li>
              </ul>
              <Cart />
            </div>
          </nav>
          <MobileNav />
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
