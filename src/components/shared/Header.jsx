import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import Cart from "./Cart"
import LogoImage from "../../images/logo.png"
import CartImage from "../../images/cart.svg"

function itemsCount(cart){
    let cnt = 0;

    for (const i of cart)
        cnt += i.qnty;

    return cnt;
}

const Header = ({setCart, cart, menuOpen, setMenuOpen}) => {
    const this_cart = useSelector((store) => store.cart);
    return (
        <>
        <header>
            <div className="top_header">
                <nav className="container" aria-label="Secondary Navigation">
                    <ul>
                        <li><Link to={'/signin'}> Sign in </Link></li>
                        <li><Link to={'/signup'}> Sign up </Link></li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <button className={menuOpen ? "hamburger-button open" : "hamburger-button"} aria-label="Hamburger Menu Button" onClick={() => {setMenuOpen(true); }} >
                            <svg viewBox="0 0 100 80" width="20" height="20" >
                                <rect width="100" height="20"></rect>
                                <rect y="30" width="100" height="20"></rect>
                                <rect y="60" width="100" height="20"></rect>
                            </svg>
                        </button>
                        <div className="nav_logo" aria-label="Site Logo">
                            <Link to={'/'}> <img src={LogoImage} alt="Logo" /> </Link>
                        </div>
                    </div>
                    <nav className={menuOpen ? "main-navigation open" : "col-md-6 main-navigation"} aria-label="Main Navigation">
                        {
                            menuOpen && (
                                <div className={menuOpen ? "close-btn-container" : "close-btn-container hidden"} aria-label="Close">
                                        <button className=".close" onClick={() => {setMenuOpen(false); }}> X </button> 
                                </div>
                            )
                        }
                        <ul className="menu_list">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/products'} className="nav-link"> Products </Link></li>
                        </ul>
                    </nav>
                    {cart && <Cart setCart={setCart} />}
                    <div className="col-md-3" aria-label="Cart Area">
                        <div className="nav_cart" onClick={() => setCart(true)}>
                            <p><img src={CartImage} alt="cart" /> {itemsCount(this_cart)} items</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header