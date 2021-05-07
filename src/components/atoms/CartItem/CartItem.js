import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';
import { plus, minus, multiple } from '../Constants';
import './CartItem.scss';

const CartItem = ({ product, onClick }) => {
  const { name, imageURL, quantity, price } = product;
  return (
    <li className='cart-item-wrap'>
      <figure className='cart-image-wrap'>
        <Image name={`products/${imageURL}`} alt={name} />
      </figure>
      <figcaption className='cart-item-details-wrap'>
        <h5>{name}</h5>
        <section className='cart-item-price-wrap'>
          <button type='button' onClick={() => onClick('decrement', product)}>
            {minus}
          </button>
          {quantity}
          <button type='button' onClick={() => onClick('increment', product)}>
            {plus}
          </button>
          <span>{multiple}</span> Rs.{price}
        </section>
        <section className='price-wrap'>Rs. {quantity * price}</section>
      </figcaption>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
export default CartItem;
