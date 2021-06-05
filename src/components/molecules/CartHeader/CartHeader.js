import React from 'react';
import './CartHeader.scss';
import * as Constants from '../../../shared/constants';
const CartHeader = ({ toggleCartModal, cartData, itemCount }) => {
  return (
    <header
      className={`${cartData.length ? 'cart-drawer-header-wrap' : 'empty-cart-drawer-header'}`}
      aria-label='cart header'
    >
      <h3 aria-label='My Cart header'>
        {Constants.MyCart}{' '}
        <span>
          {itemCount
            ? itemCount === 1
              ? ` ( ${itemCount} Item )`
              : ` ( ${itemCount} Items )`
            : ''}
        </span>
      </h3>
      <button type='button' className='close' aria-label='Close Icon' onClick={toggleCartModal}>
        <span aria-hidden='true'>&#x2715;</span>
      </button>
    </header>
  );
};

export default CartHeader;
