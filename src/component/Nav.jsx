import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Assets/images/logo.png";
import { ReactComponent as CartIcon } from "../Assets/svg/cart.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux/features/userSlice";
import {
  selectCount,
  selectIsCartOpen,
  openCart,
} from "../redux/features/appSlice";
import { signOutUser } from "../utils/firebase.utils";
import "../styles/nav.scss";
import CartDropdown from "./CartDropdown";

const Nav = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const user = useSelector(selectUser);
  const cartOpen = useSelector(selectIsCartOpen);

  const signOut = () => {
    signOutUser();
  };

  const handleCartClick = () => {
    dispatch(openCart(!cartOpen));
  };

  return (
    <Fragment>
      <nav className="nav">
        <Link to="/">
          <img src={Logo} alt="logo" className="nav-logo" />
        </Link>

        <div className="nav-options">
          {user ? (
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
      {cartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Nav;
