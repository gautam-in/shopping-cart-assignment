import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../../../static/images/logo.png';
import { allCartData } from '../../../redux/selector';
import './Header.scss';

const Header = React.memo(({ toogleCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useSelector((state) => allCartData(state));

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className='container'>
        <nav className='header-nav'>
          <div className='logo-wrap'>
            <Link to='/'>
              <img loading='lazy' src={Logo} alt='Sabka Bazaar' />
            </Link>
          </div>
          <div className={`navbar ${isOpen ? '' : 'collapse'}`}>
            <ul className='main-links'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/products',
                    state: { id: null }
                  }}
                >
                  Products
                </Link>
              </li>
            </ul>
            <ul className='side-links'>
              <li>
                <Link to='/signin'>SignIn</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </ul>
          </div>
          <div className='flex'>
            <div className='cart-wrap' onClick={toogleCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> {data && data.length ? data.length : 0} Items</span>
            </div>
            <div className='toggler' onClick={toggle}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
});

Header.propTypes = {
  toogleCart: PropTypes.func.isRequired
};

export default Header;
