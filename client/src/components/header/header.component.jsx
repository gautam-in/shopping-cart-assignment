import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import Logo from '../../images/logo.png';

import './header.styles.scss';

const Header = ({ hidden, currentUser }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    hidden ? setShow(false) : setShow(true);
  }, [hidden]);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="" />
      </Link>

      <div className="options-container">
        <div className="options">
          <Link to="/" className="option">
            Home
          </Link>
          <Link to="/products" className="option">
            Products
          </Link>
        </div>
      </div>

      <div className="user-actions">
        <div className="auth">
          {currentUser ? (
            <span className="option">Sign Out</span>
          ) : (
            <span>
              <Link to="/signin" className="option">
                Sign In
              </Link>
            </span>
          )}
          <span>
            <Link to="/signup" className="option">
              Register
            </Link>
          </span>
        </div>

        <CartIcon />
      </div>

      <CartDropdown show={show} setShow={setShow} />
      {hidden ? null : <CartDropdown show={show} setShow={setShow} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(withRouter(Header));
