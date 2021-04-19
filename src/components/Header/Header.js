import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../static/images/logo.png';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <Navbar color='light' expand='md' fixed='top'>
        <div className='container'>
          <Link to='/'>
            <img src={Logo} alt='Sabka Bazaar' />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/'>Products</Link>
              </NavItem>
            </Nav>
            <NavbarText>
              <Nav className='mr-auto' navbar>
                <NavItem>
                  <Link to='/login'>SignIn</Link>
                </NavItem>
                <NavItem>
                  <Link to='/signup'>Register</Link>
                </NavItem>
              </Nav>
            </NavbarText>
          </Collapse>
          <div className='cart-header-wrap'>
            <div className='cart-header-main'>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> 0 Items</span>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
