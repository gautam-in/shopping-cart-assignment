import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './Header.scss';
const Header = ({ toggleCartModal }) => {
    const itemCount = useSelector(state => state.cart.cartItem);
    return (<>
        <header>
            <div className="container nav_bar">
                <div className="nav_logo">
                    <Link to={'/'}><img src="static/images/logo.png" alt="Logo" aria-label={"Sabka Bazaar Logo"} /></Link>
                </div>
                <div className="nav_menu">
                    <ul className="side-links">
                        <li><Link to={'/home'} aria-label={"Navigation link for home"}>Home</Link></li>
                        <li><Link to={'/products'} aria-label={"Navigation link for products"}>Products</Link></li>
                    </ul>
                </div>
                <div className="side-nav">
                    <ul className="top_links">
                        <li><Link to={'/signin'} aria-label={"Navigation link for login"}> SignIn </Link></li>
                        <li><Link to={'/register'} aria-label={"Navigation link for register"}> Register </Link></li>
                    </ul>
                    <div className="nav_cart" onClick={toggleCartModal} >
                        <img src="static/images/cart.svg" alt="cart" />
                        <span>{itemCount}&nbsp;items</span>
                    </div>
                </div>
            </div>


        </header>
    </>)
}

export default Header;