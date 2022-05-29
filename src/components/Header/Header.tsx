import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import cart from "../../static/images/cart.svg";
import "./Header.scss";

export const Header = () => {
    const activeLinkStyle = {
        color: "#b3005c"
    }

    const inactiveLinkStyle = {
        color: "#8d8d8d"
    }

    return (
        <header className="header">
            
            <div className="header__logo">
                <NavLink to={"/"}><img src={logo} alt="Sabka Bazaar Logo"/></NavLink>
            </div>

            <nav className="header__nav">

                <div className="nav--left">
                 <NavLink to={"/"} style={ ({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle }>Home</NavLink>
                 <NavLink to={"/products"} style={ ({ isActive }) => isActive ? activeLinkStyle : inactiveLinkStyle }>Products</NavLink>
                </div>

                <div className="nav--right">
                    <NavLink to={""}>SignIn</NavLink>
                    <NavLink to={""}>Register</NavLink>
                </div>

                <div className="nav--cart">
                    <NavLink to={""}>
                      <div className="cart"><img src={cart} alt="cart"/></div>
                      <div>0 items</div>
                    </NavLink>
                </div>

            </nav>
        </header>
    )
}