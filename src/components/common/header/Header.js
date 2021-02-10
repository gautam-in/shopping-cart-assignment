import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveTab } from "../../../redux/actions/actions";
import { useWindowSize } from "../utils";
import "./Header.scss";

const Header = (props) => {
  const dispatch = useDispatch();
  const size = useWindowSize();
  const login = useSelector((state) => state.login);
  const activeTab = useSelector((state) => state.activeTab);

  const clickHandler = (activeTab) => {
    dispatch(setActiveTab(activeTab));
  };

  return (
    <header className="headerContainer">
      <img src={"/images/logo.png"} alt="logo" />
      {size.width >= 750 && (
        <div className="rightContainer">
          <Link
            className={activeTab === "Home" || login ? "active link" : "link"}
            to="/home"
            onClick={() => clickHandler("Home")}
          >
            Home
          </Link>
          <Link
            className={activeTab === "Products" ? "active link" : "link"}
            to="/productsPage"
            onClick={() => clickHandler("Products")}
          >
            Products
          </Link>
        </div>
      )}
      <div className="leftContainer">
        <Link
          className="link"
          to="/"
          onClick={() => {
            dispatch(setActiveTab(""));
          }}
        >
          SignIn
        </Link>
        <Link
          className="link"
          to="/signUp"
          onClick={() => {
            dispatch(setActiveTab(""));
          }}
        >
          Register
        </Link>
        <div className="cartContainer">
          <button onClick={props.handleCartClick}>
            <img src={"/images/cart.svg"} alt="cart" />
          </button>
          <span>{props.totalCartItems} items</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
