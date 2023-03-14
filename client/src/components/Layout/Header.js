import React, { useMemo } from 'react';
import { useShopContext } from '../../context';
import { Link } from 'react-router-dom';
import styles from './layout.module.scss';

export const Header = () => {
  const { cart, isAuth, setIsCartOpen } = useShopContext();

  /* Counting the number of items in the cart. */
  const cartlength = useMemo(() => {
    return new Set([...cart]).size;
  }, [cart]);

  /**
   * It removes the activeUser from localStorage and reloads the page.
   */
  const logout = () => {
    localStorage.removeItem('activeUser');
    window.location.reload();
  };

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
            {!isAuth ? (
              <nav className={styles.nav_links_auth}>
                <Link to="/signin">SignIn</Link>
                <Link to="/signup">Register</Link>
              </nav>
            ) : (
              <nav className={styles.nav_links_auth}>
                <Link to="/signup">Checkout</Link>
                <Link onClick={logout}>Logout</Link>
              </nav>
            )}

            <button onClick={() => setIsCartOpen(true)}>
              <img src={'/static/images/cart.svg'} alt="" style={{ height: '2rem' }} />
              <span>{cartlength} items</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

const Logo = React.memo(() => {
  return (
    <Link to="/" className={styles.logo_link}>
      <img src={'/static/images/logo.png'} alt="Logo" />
    </Link>
  );
});
