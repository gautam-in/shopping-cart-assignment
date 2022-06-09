import React from "react";
import { NavLink } from "react-router-dom";
import type { NavProps } from "../../types/customTypes";
import { HiShoppingCart } from "react-icons/hi";
import "./Nav.scss";

export const Nav = ({ cartSize, popupProps }: NavProps) => {
  
  const { setCartPopupToggle } = popupProps;

  const openCartPopup = () => { setCartPopupToggle(true); }

  return (
    <>
      <nav className="nav">
        <div className="nav--left">
          <NavLink to={"/"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Home</NavLink>
          <NavLink to={"/products/all"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Products</NavLink>
        </div>

        <div className="nav--right">
          <NavLink to={"/signin"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>SignIn</NavLink>
          <NavLink to={"/register"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Register</NavLink>
        </div>

        <div className="nav--cart">
            <button onClick={openCartPopup}>
              <HiShoppingCart className="cart-icon" />
              <div>{cartSize} items</div>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Nav;
