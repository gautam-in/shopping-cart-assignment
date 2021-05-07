import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = ({ isOpen }) => {
  return (
    <section className={`navbar ${isOpen ? '' : 'collapse'}`}>
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
    </section>
  );
};

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default Navbar;
