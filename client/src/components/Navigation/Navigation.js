import React, { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Cart from "../../assets/images/cart.png";
import Sidebar from "../Cart/Sidebar";
import "./Navigation.scss";
const cartStore = (state) => state.cartItems.cartItems;

function Navigation() {
  const cartSelect = useSelector(cartStore, shallowEqual);
  const [openSidebar, setOpenSidebar] = useState(false);
  // const [sidebarClick,setSidebarClick] = useState(false)
  const [x, setX] = useState();
  const [y, setY] = useState();
  const cartRef = useRef();
  const getPosition = () => {
    const x = cartRef.current.offsetLeft;
    setX(x);
    const y = cartRef.current.offsetTop;
    setY(y);
  };
  const cartTotalItems = () => {
    const totalItems = cartSelect.reduce(
      (total, cartItem) =>
        total + cartItem.quantity,
      0
    );
    return totalItems;
  };
  function toggleSidebar() {
    setOpenSidebar(!openSidebar);
    document.getElementsByTagName("BODY")[0].style.overflow = openSidebar
      ? "auto"
      : "hidden";
    getPosition();
  }

  return (
    <div className="navigation">
      <div className="container">
        <div className="main-nav d-flex w-100">
          <Link className="Logo" to="/">
            <img src={Logo} />
          </Link>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div className="cart " ref={cartRef} onClick={toggleSidebar}>
            <img src={Cart} />{" "}
            <span>
              {cartTotalItems()} {cartTotalItems() <= 1 ? "Item" : "Items"}
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
