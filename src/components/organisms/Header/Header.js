import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import LogoImage from "../../../images/logo.png";
import CartImage from "../../../images/cart.svg";
import './Header.scss';
const Header = ({ toggleCartModal }) => {
    const dispatch = useDispatch();
    const itemCount = useSelector(state => state.cart.cartItem);
    return (<>
        <header>
            <div className="container nav_bar">
                <div className="nav_logo">
                    <Link to={'/'}><img src={LogoImage} alt="Logo" aria-label={"Sabka Bazaar Logo"} /></Link>
                </div>
                <div className="nav_menu">
                    <ul>
                        <li><Link to={'/home'} aria-label={"Navigation link for home"}>Home</Link></li>
                        <li><Link to={'/products'} aria-label={"Navigation link for products"}>Products</Link></li>
                    </ul>
                    <ul className="top_links">
                        <li><Link to={'/signin'} aria-label={"Navigation link for login"}> SignIn </Link></li>
                        <li><Link to={'/register'} aria-label={"Navigation link for register"}> Register </Link></li>
                    </ul>
                </div>
                <div>
                    <div className="nav_cart" onClick={toggleCartModal} >
                        <img src={CartImage} alt="cart" />
                        <span>{itemCount}items</span>
                    </div>
                </div>
            </div>


        </header>
    </>)
}

export default Header;