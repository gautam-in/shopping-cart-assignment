import React, { useEffect } from "react";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  userLoginRequest,
  userLogoutRequest,
} from "../../redux/login/loginAction";
import { setSelectedCategory } from "../../redux/category/categoryAction";

function Header() {
  const loginState = useSelector((state) => state.login.logged);
  const cartCount = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const data = localStorage.getItem("user-status");
    const status = data && JSON.parse(data)?.status;
    if (status) {
      dispatch(userLoginRequest());
    }
  }, []);

  const logoutClickHandler = () => {
    dispatch(userLogoutRequest());
    localStorage.setItem("user-status", "");
  };

  const productClickHandler = () => {
    dispatch(setSelectedCategory(""));
  };
  return (
    <header className="">
      <nav>
        <div className="nav-logo">
          <img
            className="nav-logo-image"
            src="../static/images/logo.png"
            alt="Sabka Bazaar Logo"
            height="60"
            width="133"
            onClick={() => history.push("/")}
          />
        </div>
        <div className="nav-links">
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listing" onClick={productClickHandler}>
                Products
              </Link>
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
              <span
                className={cartCount ? "cart-item-count count-color" : "cart-item-count"}
              >
                {cartCount > 0 ? `${cartCount} Items` : `0 Item`}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default React.memo(Header);
