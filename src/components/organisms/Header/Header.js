import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
const Header = ({ toggleCartModal }) => {
  const itemCount = useSelector((state) => state.cart.cartItem);
  return (
    <>
      <header>
        <div className='container nav_bar'>
          <div className='nav_logo'>
            <Link to={'/'}>
              <img src='static/images/logo.png' alt='Logo' aria-label={'Sabka Bazaar Logo'} />
            </Link>
          </div>
          <div className='nav_menu'>
            <ul className='side-links'>
              <li>
                <NavLink
                  to={'/home'}
                  activeClassName='header-link-active'
                  aria-label={'Navigation link for home'}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/products'}
                  activeClassName='header-link-active'
                  aria-label={'Navigation link for products'}
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='side-nav'>
            <ul className='top_links'>
              <li>
                <NavLink
                  to={'/signin'}
                  activeClassName='header-link-active'
                  aria-label={'Navigation link for login'}
                >
                  {' '}
                  SignIn{' '}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/register'}
                  activeClassName='header-link-active'
                  aria-label={'Navigation link for register'}
                >
                  {' '}
                  Register{' '}
                </NavLink>
              </li>
            </ul>
            <div className='nav_cart' onClick={toggleCartModal}>
              <img src='static/images/cart.svg' alt='cart' />
              <span>{itemCount}&nbsp;items</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
