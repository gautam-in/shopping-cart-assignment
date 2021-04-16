import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles';

import images from '../../../constants/images';
import WEB_PATH from '../../../constants/webPath';
import MiniCart from '../../MiniCart';
import styles from './Header.scss';

const Header = () => {
  const location = useLocation();
  const miniCart = useSelector((state) => state.miniCart);
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = (e) => {
    e.preventDefault();
    setCartOpen(true);
  };

  return (
    <header>
      <nav>
        <div className="main-nav">
          <img src={images.logoImage} alt="Sabka Bazar" className="logo" />
          <ul className="page-nav">
            <li className={location.pathname === WEB_PATH.HOME ? ' active' : ''}>
              <Link to={WEB_PATH.HOME}>Home</Link>
            </li>
            <li className={location.pathname === WEB_PATH.PRODUCTS ? ' active' : ''}>
              <Link to={WEB_PATH.PRODUCTS}>Products</Link>
            </li>
          </ul>
        </div>
        <div className="action-nav">
          <ul className="action-nav-list">
            <li>
              <Link to={WEB_PATH.LOGIN}>Signin</Link>
            </li>
            <li>
              <Link to={WEB_PATH.SIGNUP}>Register</Link>
            </li>
          </ul>
          <div className="cart-box">
            <Link to={WEB_PATH.HOME} className="icon-cart cart-link" aria-label="cart" onClick={openCart} aria-labelledby="cart-modal-container" />
            <span>{`${miniCart.totalItems} items`}</span>
          </div>
          <MiniCart
            isOpen={cartOpen}
            toggle={setCartOpen}
            miniCart={miniCart}
          />
        </div>
      </nav>
    </header>
  );
};

export default withStyles(styles)(Header);
