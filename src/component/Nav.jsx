import React, { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Assets/images/logo.png";
import { ReactComponent as CartIcon } from "../Assets/svg/cart.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/slices/user/user.selector";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../store/slices/cart/cart.selector";
import { setIsCartOpen } from "../store/slices/cart/cart.action";
import { signOutUser } from "../utils/firebase.utils";
import "../styles/nav.scss";
import CartDropdown from "./CartDropdown";
import { signOutStart } from "../store/slices/user/user.action";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector(selectCartCount);
  const currentUser = useSelector(selectUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOut = () => {
    dispatch(signOutStart());
  };

  const handleCartClick = () => {
    if (window.screen.width >= 992) {
      dispatch(setIsCartOpen(!isCartOpen));
    } else {
      navigate("/cart");
    }
  };

  return (
    <Fragment>
      <nav className="nav">
        <Link to="/">
          <img src={Logo} alt={"alt_logo"} className="nav-logo" />
        </Link>

        <div className="nav-options">
          {currentUser ? (
            <div className="nav-top">
              <span className="nav-link" onClick={signOut}>
                Sign Out
              </span>
            </div>
          ) : (
            <div className="nav-top">
              <Link className="nav-link" to="/sign-in">
                Sign In
              </Link>
              <Link className="nav-link" to="sign-up">
                Register
              </Link>
            </div>
          )}

          <div className="nav-bottom">
            <div>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </div>
            <div className="nav_bottom_right" onClick={handleCartClick}>
              <span className="nav-link nav-cart">
                <CartIcon className="cart-icon" />
                {count} Items
              </span>
            </div>
          </div>
        </div>
      </nav>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Nav;
