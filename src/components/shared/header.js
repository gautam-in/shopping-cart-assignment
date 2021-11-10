import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';
import { useCategory } from '../../hooks/useCategory';

import './header.scss';

const Header = () => {

  const {itemCount, clearCart} = useContext(CartContext);
  const {setActiveCategory} = useCategory();

  const {loggedIn, setLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser) {
      setLoggedIn(true);
    }
  }, []);

  const clickHandler = () => {
    setActiveCategory('');
  };

  const onLogout = () => {
    setLoggedIn(false);
    clearCart();
    localStorage.setItem('loggedInUser', '');
  };

  return ( 
    <header className='header'>
      <nav>
        <div className='nav-logo'>
          <Link to='/'>
            <img 
              className='nav-logo-image'
              src='./static/images/logo.png'
              alt='Sabka Bazaar Logo'
              height='60'
              width='133'
            />
          </Link>
        </div>
        <div className='nav-links'>
          <ul className='links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/store' onClick={clickHandler}>Products</Link>
            </li>
          </ul>
        </div>
        <div className='cart-section'>
          {!loggedIn && <ul className='links'>
            <li>
              <Link to='/signin'>SignIn</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>}
          {loggedIn && <ul className='links'>
            <li>
              <Link to='/' onClick={onLogout}>Signout</Link>
            </li>
          </ul>}
          <div className='cart-logo'>
            <Link to='/cart'>
              <span className='icon-cart'></span>
              <span className={itemCount ? 'cart-not-empty cart-text' : 'cart-empty cart-text'}>
                {itemCount > 0 ? `${itemCount} Items` : '0 Item'}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
 
export default Header;