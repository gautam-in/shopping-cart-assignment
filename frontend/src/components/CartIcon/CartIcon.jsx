import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ShoppingIcon from '../../assets/cart.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './CartIcon.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {

  const dispatch = useDispatch();

  const onToggleCartHidden = () => {
    dispatch(toggleCartHidden())
  }

  const { itemCount } = useSelector(createStructuredSelector({
    itemCount: selectCartItemsCount
  }))

  return (
    <div className='cart-icon' onClick={onToggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount} Items</span>
    </div>
  )
};

export default CartIcon;
