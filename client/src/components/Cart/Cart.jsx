import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
  CartBanner,
  EmptyCart
} from './styles';
import lowPriceImg from './../../assets/lowest-price.png';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inCartItems = useSelector(selectCartItems);
  const noOfCartItems = useSelector(selectNoOfItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const navigateToProducts = () => {
    navigate('/products');
    dispatch(toggleCart());
  };

  return (
    <Overlay>
      <CartWrapper aria-modal="true" role="alertdialog">
        <CartHeader>
          <p>My Cart <span>{`(${noOfCartItems} item${noOfCartItems > 1 ? 's' : ''})`}</span></p>
          <button 
            type="button"
            aria-label="Close Cart Overlay"
            onClick={() => dispatch(toggleCart())}>
              X
          </button>
        </CartHeader>
        {noOfCartItems > 0 ? (
          <>
            <CartItems>
              {inCartItems.map(item => <CartItem key={item.id} {...item} />)}
              <CartBanner>
                <img src={lowPriceImg} alt="Lowest Price Guaranteed" />
                <p>You won't find it cheaper anywhere</p>
              </CartBanner>
            </CartItems>
            <CartFooter>
              <p>Promo code can be applied on payment page</p>
              <CustomButtom type="button" aria-label="Proceed to Checkout">
                <span>Proceed to Checkout</span>
                <span>{`Rs. ${totalPrice} >`}</span>
              </CustomButtom>
            </CartFooter>
          </>
        ):(
          <>
            <EmptyCart>
              <h3>No items in your cart</h3>
              <p>Your favourite items are just a click away</p>
            </EmptyCart>
            <CartFooter>
              <CustomButtom 
                aria-label="Start Shopping"
                type="button" 
                text="center"
                onClick={() => navigateToProducts()}>
                  Start Shopping
              </CustomButtom>
            </CartFooter>
          </>
        )}
      </CartWrapper>
    </Overlay>
  );
}

export default Cart;