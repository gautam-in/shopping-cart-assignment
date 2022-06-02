import React from "react";
import { NavLink } from "react-router-dom";
import type { CartSize } from "../../types/customTypes";
import { HiShoppingCart } from "react-icons/hi";
import logo from "../../static/images/logo.png";
import "./Header.scss";

export const Header = ({ size }: CartSize) => {
   
    return (
        <header className="header">
            
            <div className="header__logo">
                <NavLink to={"/"}><img src={logo} alt="Sabka Bazaar Logo"/></NavLink>
            </div>

            <nav className="header__nav">

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
                      <HiShoppingCart className="cart-image" />
                      <div>{size} items</div>
                    </NavLink>
                </div>

            </nav>
        </header>
    )
}