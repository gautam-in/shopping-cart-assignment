import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import cart from "../../static/images/cart.svg";
import "./Header.scss";

export const Header = () => {

    return (
        <header className="header">
            
            <div className="header__logo">
                <NavLink to={"/"}><img src={logo} alt="Sabka Bazaar Logo"/></NavLink>
            </div>

            <nav className="header__nav">

                <div className="nav--left">
                 <NavLink to={"/"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Home</NavLink>
                 <NavLink to={"/products"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Products</NavLink>
                </div>

                <div className="nav--right">
                    <NavLink to={"/signin"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>SignIn</NavLink>
                    <NavLink to={"/register"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Register</NavLink>
                </div>

                <div className="nav--cart">
                    <NavLink to={"/cart"} className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>
                      <div className="cart"><img src={cart} alt="cart"/></div>
                      <div>0 items</div>
                    </NavLink>
                </div>

            </nav>
        </header>
    )
}