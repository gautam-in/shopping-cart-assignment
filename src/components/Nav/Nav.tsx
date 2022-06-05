import React from "react";
import { NavLink } from "react-router-dom";
import type { CartSize } from "../../types/customTypes";
import { HiShoppingCart } from "react-icons/hi";
import "./Nav.scss";

export const Nav = ({ size }: CartSize) => {
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
            <NavLink to={"/cart"} className={ ({ isActive }) => isActive ? "active-cart" : "inactive-cart" }>
              <HiShoppingCart className="cart-icon" />
              <div>{size} items</div>
            </NavLink>
        </div>
    </nav>
    </>
  )
}
