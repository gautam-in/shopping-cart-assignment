import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import CartIcon from "../cartIcon/cartIcon";
import logo from "../../assets/logo.png";
import "./header.scss";
import { paths } from "../../routing/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { logoutUser } from "../../redux/auth/auth.actions";

const Header = () => {
  const { home, products, login, register } = paths;
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavDisplay = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const onLogout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div
            onClick={handleNavDisplay}
            className={`${currentUser ? "d-none" : ""} menu-container`}
          >
            <MenuIcon />
          </div>
          <Link to={home}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        <div className="navbar">
          <div className="navbar-left">
            <nav className="navbar-left-menu" aria-label="Primary Menu">
              <Link to={home}>Home</Link>
              <Link to={products}>Products</Link>
            </nav>
          </div>
          <div className="navbar-right">
            <div className="navbar-right-menu">
              {currentUser ? (
                <span onClick={onLogout}>Sign Out</span>
              ) : (
                <>
                  <Link to={login}>Sign In</Link>
                  <Link to={register}>Register</Link>
                </>
              )}
            </div>
            <div>
              <CartIcon />
            </div>
          </div>
        </div>
        {showMobileMenu && (
          <div className="sidenav">
            <span className="closebtn" onClick={handleNavDisplay}>
              &times;
            </span>
            <Link to={home}>Home</Link>
            <Link to={products}>Products</Link>
            <Link to={login}>Sign In</Link>
            <Link to={register}>Register</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
