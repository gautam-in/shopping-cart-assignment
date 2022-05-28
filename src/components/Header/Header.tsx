import React from "react";
import logo from "../../static/images/logo.png";
import "./Header.scss";

export const Header = () => {
    return (
        <header className="header">
            
            <div className="header__logo">
                <img src={logo} />
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

                <div className="header__cart-status">
                    Cart
                </div>

            </nav>
        </header>
    )
}