import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../CartItem/CartItem';

import { toggleCart } from './../../redux/Cart/actions';
import { 
  selectCartItems, 
  selectNoOfItems,
  selectCartTotalPrice 
} from './../../redux/Cart/selectors';

import {
  Overlay,
  CartWrapper,
  CartHeader,
  CartItems,
  CartFooter,
  CustomButtom,
  CartBanner
} from './styles';
import lowPriceImg from './../../assets/lowest-price.png';

const Cart = () => {
  const dispatch = useDispatch();
  const inCartItems = useSelector(selectCartItems);
  const noOfCartItems = useSelector(selectNoOfItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  return (
    <Overlay>
      <CartWrapper>
        <CartHeader>
          <p>My Cart <span>{`(${noOfCartItems} item${noOfCartItems > 1 ? 's' : ''})`}</span></p>
          <button 
            type="button"
            onClick={() => dispatch(toggleCart())}>
              X
          </button>
        </CartHeader>
        <CartItems>
          {inCartItems.map(item => <CartItem key={item.id} {...item} />)}
          <CartBanner>
            <img src={lowPriceImg} alt="Lowest Price Guaranteed" />
            <p>You won't find it cheaper anywhere</p>
          </CartBanner>
        </CartItems>
        <CartFooter>
          <p>Promo code can be applied on payment page</p>
          <CustomButtom type="button">
            <span>Proceed to Checkout</span>
            <span>{`Rs. ${totalPrice} >`}</span>
          </CustomButtom>
        </CartFooter>
      </CartWrapper>
    </Overlay>
  );
}

export default Cart;