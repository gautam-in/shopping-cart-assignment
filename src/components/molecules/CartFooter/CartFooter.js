import React from 'react';
import './CartFooter.scss';
import * as Constants from '../../../shared/constants';

const CartFooter = ({ totalPrice, toggleCartModal }) => {
  return (
    <footer className='cart-footer-wrap'>
      <p className='cart-footer-text'>{Constants.PromoCode}</p>
      <button
        type='button'
        className='custom-button checkout-button'
        onClick={() => {
          toggleCartModal();
          history.push('/products');
        }}
        aria-label='Click on this button to checkout'
      >
        <span className='checkout-text-wrap'>{Constants.Checkout}</span>
        <output>
          <span className='checkout-price-wrap'>Rs. {totalPrice}</span>
          <span className='arrow-checkout-icon'>{'>'}</span>
        </output>
      </button>
    </footer>
  );
};

export default CartFooter;
