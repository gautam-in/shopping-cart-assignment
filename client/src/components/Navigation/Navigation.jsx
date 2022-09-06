import { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Navigation.module.scss';
import ShopContext from '../../contexts/ShopContext';

const Navigation = () => {
  const Shop = useContext(ShopContext);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const handleSideBar = () => {
    setIsOpenSidebar(true);
  };
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
                onClick={handleSideBar}
                aria-label="sidebar">
                ☰
              </button>
              <div
                className={styles['cart-container']}
                onClick={() => setIsOpenCart(true)}
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
                  aria-label={`Shopping Cart`}>{`${Shop.count} items`}</span>
              </div>
            </div>
          </div>
        </div>
        {isOpenSidebar && <Sidebar onClose={() => setIsOpenSidebar(false)} />}
        {isOpenCart && <Cart onClose={() => setIsOpenCart(false)} />}
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navigation;
