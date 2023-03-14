import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { isAuthenticated, signOut } from "../../utils/Utilities";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/cart") {
    document.body.className = "cartTheme";
  } else {
    document.body.className = "";
  }
  const handleSignout = () => {
    signOut();
    window.location.reload();
  };
  const cartProducts = useSelector((state) => state.cart.products);
  return (
    <header className={styles.header}>
      <div className={styles.desktopMenu}>
        <div className={styles.logoContainer}>
          <img src="/static/images/logo.png" />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.menuList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeMenu : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeMenu : ""
                }
                to="/products/all"
              >
                Products
              </NavLink>
            </li>
          </ul>
          <div className={styles.rightMenuList}>
            <ul className={styles.registerMenu}>
              {!isAuthenticated() ? (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.activeMenu : ""
                      }
                      to="/login"
                    >
                      Sign in
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.activeMenu : ""
                      }
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <li onClick={handleSignout}>Sign out</li>
              )}
            </ul>
            <NavLink className={styles.cartBox} to="/cart">
              <img className={styles.cartIcon} src="/static/images/cart.svg" />
              <div>{cartProducts.length} items</div>
            </NavLink>
          </div>
        </nav>
      </div>
      <nav className={styles.mobileNav}>
        <ul className={styles.mobileMenuList}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeMenu : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeMenu : "")}
              to="/products/all"
            >
              Products
            </NavLink>
          </li>
          {!isAuthenticated() ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeMenu : ""
                  }
                  to="/login"
                >
                  Sign in
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeMenu : ""
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li onClick={handleSignout}>Sign out</li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
