import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faMinus} />
          </button>
          {quantity}
          <button type='button' onClick={() => onClick('increment', product)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <span>X</span> Rs.{price}
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
