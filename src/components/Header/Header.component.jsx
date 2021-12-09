import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.scss';
import CartLogo from '../../../static/images/cart.svg'; 


const Header = () => {
    console.log(CartLogo)
    return (
        <div className="header-container">
            <div className="app-logo">
                <h1>Nav logo</h1>
            </div>
            <div className="main-nav">
                    <p>home</p>
                    <p>products</p>
            </div>
            <div className="auth-cart-navs">
                    <div className="auth-navs">
                        <p>Signin</p>
                        <p>Register</p>
                    </div>
                    <div className="cart">
                    </div>
            </div>
        </div>
    )
}

export default Header;
