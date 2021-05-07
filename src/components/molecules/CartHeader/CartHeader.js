import React from 'react';
import PropTypes from 'prop-types';

import { multiple } from '../../atoms/Constants';
import './CartHeader.scss';

const CartHeader = ({ items, toggleCart }) => {
  return (
    <header className='cart-header'>
      <h6>
        My Cart <span>{items ? ` ( ${items} Items )` : ''}</span>
      </h6>
      <button className='close' onClick={toggleCart} aria-label='close'>
        {multiple}
      </button>
    </header>
  );
};

CartHeader.propTypes = {
  items: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired
};

export default CartHeader;
