import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  .tab {
    display: flex;
    align-items: flex-end;
  }
  .auth-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      margin-top: 0.5rem;
      padding: 0.5rem;
    }
    img {
      height: 3rem;
      padding: 0.5rem;
    }
    .cart {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      background: lightgrey;
      padding: 0.4rem;
      height: 4rem;
    }
  }
  a {
    padding: 1rem;
    text-decoration: none;
    color: var(--gray);
  }
  @media only screen and (min-width: 600px) {
    .tab {
      margin-right: 15%;
    }
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

export default function Nav() {
  const { itemCount } = useContext(CartContext);
  const history = useHistory();
  let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  return (
    <NavStyles>
      <div className='tab'>
        <Link to='/' className='navbar-item'>
          Home
        </Link>
        <Link to='/products' className='navbar-item'>
          Products
        </Link>
      </div>
      <div className='auth-link'>
        <div>
          {isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  localStorage &&
                    localStorage.setItem('isLoggedIn', JSON.stringify(false));
                  history.push('/');
                  window.location.reload();
                }}>
                Signout
              </button>
            </>
          ) : (
            <>
              <Link to='/signin' className='navbar-item'>
                SignIn
              </Link>
              <Link to='/register' className='navbar-item'>
                Register
              </Link>
            </>
          )}
        </div>
        <Link to='/cart' className='navbar-item cart'>
          <img src='./cart.svg' alt='Cart'></img>
          <>
            {localStorage &&
            JSON.parse(localStorage.getItem('isLoggedIn')) === true
              ? `${itemCount} item${itemCount > 1 ? 's' : ''}`
              : 'Cart items'}
          </>
        </Link>
      </div>
    </NavStyles>
  );
}
