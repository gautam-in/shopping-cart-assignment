import React, { useEffect, useState } from "react";
import "./Layout.css"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const Layout = (props) => {
    const cartItems =  useSelector((state) => state.cart.cartItems);
    const [showCart, toggleCart] = useState(false);
    const navigate = useNavigate();
    const totalCount = cartItems.reduce(
        (acc, item) => acc + item.quantity,
    0);

    const toggleCartHandler = () => {
        toggleCart(!showCart);
    }

    useEffect(() => {
        if (showCart) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showCart]); 

    return ( 
        <div className="container">
            <header className="header" role="banner">
                <div className="content">
                    <nav className="navBar">
                        <div className="logo"><img src="/static/images/logo_2x.png" className="logoImage" alt="Sabka Bazaar" onClick={() => navigate('/')}/></div>
                        <div className="leftMenu">
                            <div className="menuItem"><Link to="/">Home</Link></div>
                            <div className="menuItem"><Link to="/products">Products</Link></div>
                        </div>
                        <div className="rightMenu">
                            <div className="authContainer">
                                <div className="auth">
                                    <Link to="/signin">SignIn</Link>
                                </div>
                                <div className="auth">
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
                            <div className="cartContainer" onClick={toggleCartHandler}>
                                <img
                                    className="cartImg"
                                    src='/static/images/cart.svg'
                                    alt='cart'
                                /> {totalCount} items
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {showCart ? <Cart toggleCartHandler={toggleCartHandler}/> : null}
            <section className="content" role="main">
                {props.children}
            </section>
            <footer className="footer" role="contentinfo">
                <div className="content">
                    Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
                </div>
            </footer>
        </div>
    );
}
export default Layout;