import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Cart from "../../assets/images/cart.png";
import Sidebar from "../Cart/Sidebar";
import "./Navigation.scss";
import { cartTotalItemsSelect } from "../../Selectors/Cart.selector";

// const cartStore = (state) => state.cartItems.cartItems;

function Navigation() {
  // const cartSelect = useSelector(cartStore);
  const cartTotalItems = useSelector(cartTotalItemsSelect);
  const [openSidebar, setOpenSidebar] = useState(false);

  const cartRef = useRef();

  function toggleSidebar() {
    setOpenSidebar(!openSidebar);
    document.getElementsByTagName("BODY")[0].style.overflow = openSidebar
      ? "auto"
      : "hidden";
  }

  return (
    <div className="navigation">
      <div className="container">
        <div className="main-nav d-flex w-100">
          <Link className="Logo" to="/">
            <img src={Logo} alt="Sabka bazaar logo"/>
          </Link>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="cart " ref={cartRef} onClick={toggleSidebar}>
            <img src={Cart} alt="cart"/>{" "}
            <span>
              {cartTotalItems} {cartTotalItems <= 1 ? "Item" : "Items"}
            </span>
          </div>
        </div>
        <Sidebar
          classes={"sidebar " + (openSidebar ? "open" : "")}
          closeSidebar={toggleSidebar}
        />
        <div
          className={"backdrop " + (openSidebar ? "open" : "")}
          onClick={toggleSidebar}
        ></div>
        <div className="signup-login">
          <Link to="/signin">Signin</Link>
          <Link to="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
