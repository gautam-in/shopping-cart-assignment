import React, { useEffect, useState } from "react";
import styles from "./Layout.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const Layout = (props) => {
    const cartItems = useSelector((state) => state.cart.cartItems);
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
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.content}>
                    <nav className={styles.navBar}>
                        <div className={styles.logo} onClick={() => navigate('/')}><img src="/static/images/logo_2x.png" className={styles.logoImage} alt="Sabka Bazaar"/></div>
                        <div className={styles.leftMenu}>
                            <div className={styles.menuItem}><Link to="/">Home</Link></div>
                            <div className={styles.menuItem}><Link to="/products">Products</Link></div>
                        </div>
                        <div className={styles.rightMenu}>
                            <div className={styles.authContainer}>
                                <div className={styles.auth}>
                                    <Link to="/signin">SignIn</Link>
                                </div>
                                <div className={styles.auth}>
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
                            <div className={styles.cartContainer} onClick={toggleCartHandler}>
                                <img
                                    className={styles.cartImg}
                                    src='/static/images/cart.svg'
                                    alt='cart'
                                /> {totalCount} items
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {showCart ? <Cart toggleCartHandler={toggleCartHandler}/> : null}
            <section className={styles.content}>
                {props.children}
            </section>
            <footer className={styles.footer}>
                <div className={styles.content}>
                    Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
                </div>
            </footer>
        </div>
    );
}
export default Layout;
