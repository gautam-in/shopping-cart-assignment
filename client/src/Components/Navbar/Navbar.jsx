import React from "react";
import "./Navbar.css";
import img from "../../Assets/static/images/logo.png";
import cartImg from "../../Assets/static/images/cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart/CartPopup";
import CartPopup from "../Cart/CartPopup";

const Navbar = () => {
  let cart = useSelector((state) => {
    return state.cartItems;
  });
  let navigate = useNavigate();
  let { cartItems } = cart;
  let openCart = () => {
    navigate("/cart");
  };
  return (
    <React.Fragment>
      <nav>
        <div className="container-lg">
          <div className="nav-container">
            <div className="nav-left">
              <div className="brand">
                <Link to="/">
                  <img src={img} className="m-2" alt="Main logo" />
                </Link>
              </div>
              <div className="nav-links nav-left-links display">
                <Link to="/" className="nav-items">
                  Home
                </Link>
                <Link to="/Products/All" className="nav-items">
                  Products
                </Link>
              </div>
            </div>
            <div className="nav-right">
              <div className="nav-links nav-right-links mt-3 display">
                <Link to="/signIn">Sign-in</Link>
                <Link to="/register">Register</Link>
              </div>
              {/* This will appear for desktop only. cart as a pop up */}
              <div className="cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img
                  src={cartImg}
                  className=" img-fluid mx-1"
                  height="30px"
                  width="30px"
                  alt="Cart"
                />
                <div>{cartItems.length} Items </div>
              </div>
              {/* this will appear for tablets and mobiles only. loading cart as component */}
              {/* <div className="cart-tablets" onClick={openCart}>
                <img
                  src={cartImg}
                  className=" img-fluid mx-1"
                  height="30px"
                  width="30px"
                  alt="Cart"
                />
                <div>{cartItems.length} Items </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>

      <CartPopup />
    </React.Fragment>
  );
};
export default Navbar;
