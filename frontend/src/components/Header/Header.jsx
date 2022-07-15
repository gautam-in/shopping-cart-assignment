import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import Logo from '../../assets/logo.png';

import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../CartDropdown/CartDropdown';
import { logout } from '../../redux/user/user.actions';


const Header = () => {

  const dispatch = useDispatch();

  const { hidden, currentUser } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }))

  const onLogOut = () => {
    dispatch(logout());
  }

  return (
    <header className="header">
      <div className='header-content'>
        <div className='logo-container'>
          <Link to='/'>
            <img src={Logo} alt="Shopping Cart Logo" className="logo" aria-label={"Shopping Cart Logo"} />
          </Link>
        </div>
        <nav className="options">
          <div>
            <Link className='option tabletonly' to='/'>
              Home
            </Link>
            <Link className='option tabletonly' to='/products'>
              Products
            </Link>
          </div>

          <div>
            {currentUser &&
              <div>
                <button  aria-label={"Logout"} className='option custom-btn' onClick={onLogOut}>
                  Logout
                </button>
              </div>
            }
            {!currentUser && <div className='auth-options'>
              <Link className='option' to='/signin'>
                SignIn
              </Link>
              <Link className='option' to='/register'>
                Register
              </Link>
            </div>}
            <div className='cart-container'>
              <CartIcon />
            </div>
          </div>
        </nav>
      </div>
      {hidden ? null : <CartDropdown />}
    </header>

  )
};


export default Header;
