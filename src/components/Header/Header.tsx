import React from "react";
import logo from "../../static/images/logo.png";
import cart from "../../static/images/cart.svg";
import "./Header.scss";

export const Header = () => {
    return (
        <header className="header">
            
            <div className="header__logo">
                <img src={logo} alt="Sabka Bazaar Logo"/>
            </div>

            <nav className="header__nav">

                <div className="nav--left">
                 <div>Home</div>
                 <div>Products</div>
                </div>

                <div className="nav--right">
                    <div>SignIn</div>
                    <div>Register</div>
                </div>

                <div className="nav--cart">
                    <div className="cart"><img src={cart} alt="cart"/></div>
                    <div>0 items</div>
                </div>

            </nav>
        </header>
    )
}