import React, { useState } from "react";
import logo from "@images/logo.png";
import cart from "@images/cart.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: any = () => {
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <header className={`${styles.header}`}>
      <section
        className={`disp-flex pos-rel align-items-center high-100-perc ${styles.header_main_contents}`}
      >
        <img src={logo} alt="app_logo" height="60" width="150" />
        <nav className={styles.main_nav_container}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <nav className={`pos-abs right-0 top-0 ${styles.sub_nav_container}`}>
          <Link to="/login">SignIn</Link>
          <Link to="/register">Register</Link>
        </nav>
        <aside
          className={`disp-flex pos-abs right-0 align-items-center ${styles.cart_container}`}
        >
          <img src={cart} alt="cart_icon" height="25" width="25" />
          <span>{itemsCount} items</span>
        </aside>
      </section>
    </header>
  );
};

export default Header;
