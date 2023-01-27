import { useMarket } from 'context';
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './layout.module.scss'

const Logo = React.memo(() => {
  return (
    <Link to="/" className={styles.logo_link}>
      <img src={"/static/images/logo.png"} alt="Homepage" />
    </Link>
  );
});

export const Header = () => {
  const { isAuth } = useMarket();
  console.log({ isAuth })
  return (
    <div className={styles.header_container}>
      <header className={styles.header}>
        <Logo />

        <nav className={styles.nav_links}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>

        <div>
          <div className={styles.right_nav}>
            {!isAuth && (
              <nav className={styles.nav_links_auth}>
                <Link to="/signin">SignIn</Link>
                <Link to="/register">Register</Link>
              </nav>
            )}

            <button>
              <img src={"/static/images/cart.svg"} alt="" />
              <span>0 items</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
