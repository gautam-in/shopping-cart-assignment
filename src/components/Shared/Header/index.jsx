import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../../../constants/images';
import WEB_PATH from '../../../routes/webPath';

import './Header.scss';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav>
        <div className="main-nav">
          <img src={logo.logoImage} alt="Sabka Bazar" className="logo" />
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
            <Link to={WEB_PATH.HOME} className="icon-cart cart-link" aria-label="cart" />
            <span>0 items</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
