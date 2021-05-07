import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { nextArrow } from '../../atoms/Constants';
import './CartFooter.scss';

const CartFooter = ({ totalPrice, toggleCart }) => {
  const history = useHistory();

  return (
    <footer className='cart-footer'>
      {totalPrice ? (
        <>
          <p className='cart-footer-text'>Promo code can be applied on payment page</p>
          <button type='button' onClick={toggleCart}>
            <span className='text'>Proceed to Checkout</span>
            <span className='price'>
              Rs.{totalPrice} <span>{nextArrow}</span>
            </span>
          </button>
        </>
      ) : (
        <button
          type='button'
          onClick={() => {
            toggleCart();
            history.push('/');
          }}
        >
          Start Shopping
        </button>
      )}
    </footer>
  );
};

CartFooter.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired
};
export default CartFooter;
