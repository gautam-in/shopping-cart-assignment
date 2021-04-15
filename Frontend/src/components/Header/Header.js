/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../static/images/logo.png';
import {allCartData} from '../../selector';
import './Header.scss';
import {userLogout} from '../../actions';

const Header = React.memo(({cartSideNav}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const {data} = useSelector((state) => allCartData(state));
  const {data: userInfo} = useSelector((state) => state.user);
  const toggle = () => setIsOpen(!isOpen);
  const userLogOut = () => dispatch(userLogout());
  return (
    <header>
      <Navbar color="light" expand="md" fixed="top">
        <div className="container container-wrap">
          <Link to="/" className="logo-wrap">
            <img src={Logo} alt="Sabka Bazaar logo" />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link
                  to={{
                    pathname: '/products',
                    state: {id: null},
                  }}
                >
                  Products
                </Link>
              </NavItem>
            </Nav>

            <NavbarText>
              {userInfo.emailid ? (
                <div className="user-info">
                  <h5>Welcome {userInfo.emailid} </h5>
                  <span onClick={userLogOut} aria-hidden="true">
                    ( Logout )
                  </span>
                </div>
              ) : (
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link to="/login">SignIn</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/signup">Register</Link>
                  </NavItem>
                </Nav>
              )}
            </NavbarText>
          </Collapse>
          <div
            className="cart-header-wrap"
            onClick={cartSideNav}
            data-testid="cart-btn"
          >
            <div className="cart-header-main">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> {data.length ? data.length : 0} Items</span>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
});

Header.propTypes = {
  cartSideNav: PropTypes.func.isRequired,
};

export default Header;
