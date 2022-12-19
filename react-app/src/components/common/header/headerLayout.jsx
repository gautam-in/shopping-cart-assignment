import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getCartItems } from "../../../store/entities/items";

import "./header.scss";

function HeaderNav() {
  const cartItems = useSelector(getCartItems);

  const cartItemCount = () => {
    let itemcount = 0;
    cartItems.map((element) => {
      itemcount = itemcount + element.itemCount;
    });
    return `${itemcount} items`;
  };
  return (
    <div>
      <div className="headerComponent">
        <div className="leftSection">
          <div className="logo">
            <Link to="/" className="logo-container">
              <img src="static/images/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="items">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
        </div>

        <div className="rightSection">
          <div className="loginSec">
            <Link to="/login">SignIn</Link>
            <Link to="/signUp">Register</Link>
          </div>
          <div className="cartLogo">
            <div>
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Link>
            </div>

            <div>{cartItemCount()}</div>
          </div>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default HeaderNav;
