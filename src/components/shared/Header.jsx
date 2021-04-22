import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import Cart from "./Cart"
import LogoImage from "../../images/logo.png"
import CartImage from "../../images/cart.svg"
import header from "../../styles/header.scss"

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
            <div>
                <div className="menuToggleContainer">
                    <button className={menuOpen ? "hamburger-button open" : "hamburger-button"} aria-label="Hamburger Menu Button" onClick={() => {setMenuOpen(true); }} >
                        <svg viewBox="0 0 100 80" width="15" height="10" >
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </button>
                </div>
                <div className="nav_logo" aria-label="Site Logo">
                        <Link to={'/'}> <img src={LogoImage} alt="Logo" /> </Link>
                </div>
                <nav>
                    <ul aria-label="Main Navigation" className={menuOpen ? "menu_list primary-navigation open" : "menu_list primary-navigation"}>
                                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                                <li><Link to={'/products'} className="nav-link"> Products </Link></li>
                    </ul>
                </nav>
            </div>
            
            <div>
                <div className="cart-area">
                    <nav aria-label="Secondary Navigation">
                        <ul className="menu_list">
                            <li><Link to={'/signin'}> Sign in </Link></li>
                            <li><Link to={'/signup'}> Sign up </Link></li>
                        </ul>
                    </nav>
                    {cart && <Cart setCart={setCart} />}
                    <div onClick={() => setCart(true)} className="nav_cart" aria-label="Cart Area">
                        <button>
                            <img src={CartImage} alt="cart" />
                        </button>
                        <div><span className="cartItemCount">{itemsCount(this_cart)}</span> items</div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header