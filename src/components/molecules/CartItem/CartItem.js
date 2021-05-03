import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './CartItem.scss';

const CartItem = React.memo(({ product, onClick }) => {
  const { id, name, imageURL, quantity, price } = product;
  return (
    <li className='cart-item-wrap'>
      <div className='cart-image-wrap'>
        <img
          loading='lazy'
          src={require(`../../../../static/images/products/${imageURL}`).default}
          alt={name}
        />
      </div>
      <div className='cart-item-details-wrap'>
        <h5>{name}</h5>
        <div className='cart-item-price-wrap'>
          <span>
            <button type='button' onClick={() => onClick('decrement', cartProduct)}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            {quantity}
            <button type='button' onClick={() => onClick('increment', cartProduct)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </span>
          <span>X</span> Rs.{price}
        </div>
        <div className='price-wrap'>Rs. {quantity * price}</div>
      </div>
    </li>
  );
});

CartItem.propTypes = {
  product: PropTypes.isRequired,
  onClick: PropTypes.func.isRequired
};
export default CartItem;
