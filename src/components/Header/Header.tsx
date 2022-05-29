import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo.png";
import cart from "../../static/images/cart.svg";
import "./Header.scss";

export const Header = () => {
    return (
        <header className="header">
            
            <div className="header__logo">
                <Link to={"/"}><img src={logo} alt="Sabka Bazaar Logo"/></Link>
            </div>

            <nav className="header__nav">

                <div className="nav--left">
                 <Link to={"/"}>Home</Link>
                 <Link to={"/products"}>Products</Link>
                </div>

                <div className="nav--right">
                    <Link to={""}>SignIn</Link>
                    <Link to={""}>Register</Link>
                </div>

                <div className="nav--cart">
                    <Link to={""}>
                      <div className="cart"><img src={cart} alt="cart"/></div>
                      <div>0 items</div>
                    </Link>
                </div>

            </nav>
        </header>
    )
}