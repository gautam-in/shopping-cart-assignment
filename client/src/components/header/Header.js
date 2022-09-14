import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
   
    return (
      <div className={styles['flex-col']}>
        <header className={styles['navigation-container']}>
          <div className={styles['navigations-items']}>
            <div className={styles['flex']}>
              <img className={styles['home-logo']} src="./static/images/logo.png" alt="HomePage" />
              <nav className={styles['nav-list']}>
                <ul className={styles['flex']}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles['signin-and-cart-container']}>
              <div className={styles['signin-container']}>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Register</Link>
              </div>
              <div className={`${styles.flex} ${styles['height-100']}`}>
                <button
                  className={styles['sidebar-btn']}
                //   onClick={handleSideBar}
                  aria-label="sidebar">
                  ☰
                </button>
                <div
                  className={styles['cart-container']}
                //   onClick={() => setIsOpenCart(true)}
                  role="button"
                  tabIndex="0">
                  <img
                    className={styles['cart-icon']}
                    src="./static/images/cart.svg"
                    alt="Shopping Cart"
                    aria-hidden
                  />
                  <span
                    className={styles['cart-items']}
                    role="status"
                    aria-label={`Shopping Cart`}>{` 0 items`}</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    );
  };
  
  export default Header;