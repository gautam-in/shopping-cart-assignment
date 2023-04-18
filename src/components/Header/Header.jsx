import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export function Header() {
    const cartItemsSelected = 0;

    return (
        <header className={styles.appHeader}>
            <a link-identifier="Generic Name" href="#mainContent" className="skip-main">
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
                        />
                    </a>
                    <nav aria-label="Main Navigation" tabIndex="0">
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/products"}>Products</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.auth}>
                    <div className={styles.authTop}>
                        <Link to={"/login"}>Sign In</Link>
                        <Link to={"/register"}>Register</Link>
                    </div>
                    <button className={styles.cartDisplay} aria-label={`${cartItemsSelected} items`}>
                        <span className={styles.icon} aria-hidden="true">
                            <img loading="lazy"
                                src="/static/images/cart.svg"
                                alt="Sabka Bazaar"
                            />
                        </span>
                        0 items
                    </button>
                </div>
            </div>
        </header>
    )
}