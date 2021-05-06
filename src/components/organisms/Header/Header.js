import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { allCartData } from '../../../redux/selector';
import Image from '../../atoms/Image';
import Navbar from '../../molecules/Navbar';
import './Header.scss';

const Header = React.memo(({ toggleCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useSelector((state) => allCartData(state));

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <section className='container'>
        <nav className='header-nav'>
          <section className='logo-wrap'>
            <Link to='/'>
              <Image name={'logo.png'} alt='Sabka Bazar' />
            </Link>
          </section>
          <Navbar isOpen={isOpen} />
          <section className='flex'>
            <button className='cart-wrap' onClick={toggleCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> {data && data.length ? data.length : 0} Items</span>
            </button>
            <button className='toggler' onClick={toggle} aria-label='toggler'>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </section>
        </nav>
      </section>
    </header>
  );
});

Header.propTypes = {
  toggleCart: PropTypes.func.isRequired
};

export default Header;
