import React, { useMemo } from 'react'
import { useMarket } from 'context';
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
  const { cart, isAuth, setIsCartOpen } = useMarket();

  const cartlength = useMemo(() => {
    return new Set([...cart]).size
  }, [cart])

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

            <button onClick={(() => setIsCartOpen(true))}>
              <img src={"/static/images/cart.svg"} alt="" />
              <span>{cartlength} items</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
