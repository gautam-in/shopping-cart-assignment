import React from 'react';
import './CartBody.scss';
import * as Constants from '../../../shared/constants';
import CartItem from '../../molecules/CartItem/CartItem';
const CartBody = ({ cartData }) => {
  const cartItemList =
    cartData &&
    cartData.map((item) => {
      return <CartItem item={item} key={item.id} />;
    });
  return (
    <section className='modal-body filled-cart-body'>
      <ul>{cartItemList}</ul>
      <section className='lowest-price'>
        <img src='static/images/lowest-price.png' alt='Lowest Price' loading='lazy' />
        <span>{Constants.LowestPrice}</span>
      </section>
    </section>
  );
};

export default CartBody;
