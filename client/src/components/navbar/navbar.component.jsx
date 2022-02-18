import React, { useState } from "react";
import { connect } from "react-redux";
import "./navbar.styles.scss";
import { NavLink } from "react-router-dom";
import Cart from "../cart/cart.component";

const NavBar = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <header className="header">
      <div className="header__leftElem">
        <NavLink to="/">
          <img
            src="/static/images/logo_2x.png"
            alt="Brand Logo"
            width="95"
            height="43"
          />
        </NavLink>
        <nav className="nav__links--display">
          <ul className="nav__links nav__links--alignEnd">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__rightElem">
        <nav>
          <ul className="nav__links nav__links--alignStart  nav__links--display">
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
        <button className="cartButton" onClick={() => setIsToggle(!isToggle)}>
          <img
            src="/static/images/cart.svg"
            alt="Cart"
            width="20px"
            height="20px"
          />
          <span className="cartButton--pl10">
            {Array.isArray(props.itemSelected) && props.itemSelected.length
              ? props.itemSelected.length
              : 0}
          </span>
          <span className="cartButton--pl5">Items</span>
          {isToggle ? <Cart setIsToggle={setIsToggle} /> : null}
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    itemSelected: state.product.itemSelected,
  };
};

const mapDispatchToState = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToState)(NavBar);
