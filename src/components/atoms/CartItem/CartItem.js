import React from 'react';
import PropTypes from 'prop-types';

import { plus, minus, multiple } from '../Constants';
import './CartItem.scss';

const CartItem = React.memo(({ product, onClick }) => {
  const { name, imageURL, quantity, price } = product;
  return (
    <li className='cart-item-wrap'>
      <div className='cart-image-wrap'>
        <img
          loading='lazy'
          src={require(`../../../../static/images/products/${imageURL}`).default}
          alt={name}
          width='100%'
        />
      </div>
      <div className='cart-item-details-wrap'>
        <h5>{name}</h5>
        <div className='cart-item-price-wrap'>
          <button type='button' onClick={() => onClick('decrement', product)}>
            {minus}
          </button>
          {quantity}
          <button type='button' onClick={() => onClick('increment', product)}>
            {plus}
          </button>
          {multiple} Rs.{price}
        </div>
        <div className='price-wrap'>Rs. {quantity * price}</div>
      </div>
    </li>
  );
});

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
export default CartItem;
