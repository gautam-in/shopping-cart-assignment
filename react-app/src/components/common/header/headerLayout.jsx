import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getCartItems } from "../../../store/entities/items";
import { useLocation } from "react-router-dom";

import "./header.scss";
import { isMobile } from "../../../utils";
import Footer from "../footer/footer";

function HeaderNav() {
  const cartItems = useSelector(getCartItems);
  const location = useLocation();
  const { pathname } = location;

  const cartItemCount = () => {
    let itemcount = 0;
    cartItems.map((element) => {
      itemcount = itemcount + element.itemCount;
    });
    return `${itemcount} items`;
  };
  console.log("isMobile", isMobile);
  return (
    <div>
      <div className="headerComponent">
        <div className="leftSection">
          <div className="logo">
            <Link to="/" className="logo-container">
              <img src="static/images/logo.png" alt="logo" />
            </Link>
          </div>

          {!isMobile && (
            <div className="items">
              <Link
                className={"link " + (pathname === "/" ? "active" : "")}
                to="/"
              >
                Home
              </Link>
              <Link
                className={"link " + (pathname === "/products" ? "active" : "")}
                to="/products"
              >
                Products
              </Link>
            </div>
          )}
        </div>

        <div className="rightSection">
          <div className="loginSec">
            <Link to="/login" className={pathname === "/login" ? "active" : ""}>
              Sign In
            </Link>
            <Link
              to="/signUp"
              className={pathname === "/signUp" ? "active" : ""}
            >
              Register
            </Link>
          </div>
          <div className="">
            <Link to="/cart" className={pathname === "/cart" ? "active" : ""}>
              <div className="cartLogo">
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
                <div>{cartItemCount()}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bodyContainer">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default HeaderNav;
