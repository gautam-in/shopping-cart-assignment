import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.scss";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MyCart from "../MyCart/MyCart";
import { useSelector, useDispatch } from "react-redux";
import { userStatus } from "../../Redux/cred";
export default function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const isLogged = useSelector((state) => state.userList.isLoggedIn.isLoggedIn);
  const [headerSign, setHeaderSign] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged === true) {
      setHeaderSign(true);
    } else {
      setHeaderSign(false);
    }
  }, [isLogged]);

  const handleLogout = () => {
    setHeaderSign(false);
    dispatch(
      userStatus({
        isLoggedIn: false,
      })
    );
    history.push("/");
  };

  return (
    <header className={classes.container}>
      <div className={classes.NavBar}>
        <div
          tabIndex="0"
          onClick={() => history.push("/")}
          className={classes.LogoContainer}
        >
          <img src={logo} alt="Company Logo" />
        </div>
        <nav>
          <div className={classes.AuthNav}>
            <ul className={classes.NavLinksContainer}>
              <li>
                {headerSign ? null : (
                  <Link
                    style={{
                      color: location.pathname === "/login" && "#d00155",
                    }}
                    to="/signin"
                  >
                    SignIn
                  </Link>
                )}
              </li>
              <li>
                {headerSign ? (
                  <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                    Logout
                  </div>
                ) : (
                  <Link
                    style={{
                      color: location.pathname === "/register" && "#d00155",
                    }}
                    to="/register"
                  >
                    Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className={classes.FreeNavContainer}>
            <ul className={classes.NavLinksContainer}>
              <li>
                <Link
                  style={{ color: location.pathname === "/" && "#d00155" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: location.pathname === "/products" && "#d00155",
                  }}
                  to="/products"
                >
                  Products
                </Link>
              </li>
            </ul>
            <MyCart />
          </div>
        </nav>
      </div>
    </header>
  );
}
