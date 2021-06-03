import React from 'react';
import './EmptyCart.scss';
import { useHistory } from 'react-router-dom';
import * as Constants from '../../../shared/constants';

const EmptyCart = ({ toggleCartModal }) => {
  const history = useHistory();
  return (
    <>
      <section className='empty-cart-body'>
        <h5 aria-label='No item in your cart'>{Constants.CartEmpty}</h5>
        <p aria-label='Your favourite items are just a click away'>{Constants.CartEmptyFavItems}</p>
      </section>
      <footer className='empty-cart-footer-wrap'>
        <button
          type='button'
          className='custom-button empty-cart-button'
          onClick={() => {
            toggleCartModal();
            history.push('/products');
          }}
        >
          {Constants.StartShopping}
        </button>
      </footer>
    </>
  );
};

export default EmptyCart;
