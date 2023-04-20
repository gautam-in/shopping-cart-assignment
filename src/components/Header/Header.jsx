import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "@components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/cartReducer";

export function Header() {
    const cartItemsSelected = 0;
    const [isCartOpen, setCartOpen] = useState(false);
    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const toggleCart = () => {
        if (window.innerWidth > 769) {
            setCartOpen(!isCartOpen);
        } else {
            navigation("/cart");
        }
    };

    const onCartClose = () => {
        setCartOpen(false);
    };

    const onAdd = (product) => {
        dispatch(add(product))
    };

    const onRemove = (product) => {
        dispatch(remove(product))
    };

    return (
        <header className={styles.appHeader}>
            <a link-identifier="Generic Name" href="#mainContent" className="skip-main" data-testid="skip-to-main">
                Skip to Main Content
            </a>
            <div className={"container " + styles.container}>
                <div className={styles.navigation}>
                    <a href="/" aria-label="Sabka Bazar Home Page" className={styles.logo}>
                        <img
                            loading="lazy"
                            srcSet="/static/images/logo.png 1x, /static/images/logo_2x.png 2x"
                            src="/static/images/logo.png"
                            alt="Sabka Bazaar"
                            data-testid="app-logo"
                        />
                    </a>
                    <nav aria-label="Main Navigation" tabIndex="0">
                        <ul>
                            <li>
                                <Link to={"/"} data-testid="home-link" >Home</Link>
                            </li>
                            <li>
                                <Link to={"/products"} data-testid="products-link">Products</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.auth}>
                    <div className={styles.authTop}>
                        <Link data-testid="sign-in-link" to={"/login"}>Sign In</Link>
                        <Link data-testid="register-link" to={"/register"}>Register</Link>
                    </div>
                    <button className={styles.cartDisplay} aria-label={`${cartItemsSelected} items`} onClick={toggleCart} data-testid="cart-button">
                        <span className={styles.icon} aria-hidden="true">
                            <img loading="lazy"
                                src="/static/images/cart.svg"
                                alt="Sabka Bazaar"
                            />
                        </span>
                        {cartData.totalItems} items
                    </button>
                </div>
            </div>
            <CartModal
                items={cartData.items}
                totalPrice={cartData.totalPrice}
                totalItems={cartData.totalItems}
                isOpen={isCartOpen}
                onAdd={onAdd}
                onRemove={onRemove}
                onClose={onCartClose}
            />
        </header>
    )
}