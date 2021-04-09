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

const Header = ({setCart, cart}) => {
    const this_cart = useSelector((store) => store.cart);
    return (
        <>
        <section className="top_header">
            <div className="container">
                <ul>
                    <li><Link to={'/signin'}> Sign in </Link></li>
                    <li><Link to={'/signup'}> Sign up </Link></li>
                </ul>
            </div>
        </section>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nav_logo">
                            <Link to={'/'}> <img src={LogoImage} alt="Logo" /> </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="menu_list">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/products'} className="nav-link"> Products </Link></li>
                        </ul>
                    </div>
                    {cart && <Cart setCart={setCart} />}
                    <div className="col-md-3">
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