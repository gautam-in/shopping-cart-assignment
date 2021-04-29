import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../../static/images/logo.png';
import { allCartData } from '../../selector';
import './Header.scss';

const Header = React.memo(({ cartSideNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useSelector((state) => allCartData(state));

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <Navbar color='light' expand='md' fixed='top'>
        <div className='container container-wrap'>
          <Link to='/' className='logo-wrap'>
            <img loading='lazy' src={Logo} alt='Sabka Bazaar' />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link
                  to={{
                    pathname: '/products',
                    state: { id: null }
                  }}
                >
                  Products
                </Link>
              </NavItem>
            </Nav>
            <NavbarText>
              <Nav navbar>
                <NavItem>
                  <Link to='/login'>SignIn</Link>
                </NavItem>
                <NavItem>
                  <Link to='/signup'>Register</Link>
                </NavItem>
              </Nav>
            </NavbarText>
          </Collapse>
          <div className='cart-header-wrap' onClick={cartSideNav}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span> {data.length ? data.length : 0} Items</span>
          </div>
        </div>
      </Navbar>
    </header>
  );
});

Header.propTypes = {
  cartSideNav: PropTypes.func.isRequired
};

export default Header;
