import { StyledCartBox, StyledCartOverlay } from './Cartbox.styled';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './Cart';
import React from 'react';
import { currentState } from '../../../redux/slices/cart';
import { getCartIcon } from '../../../services/ApiService';

const CartBox = () => {
  const cartIcon = getCartIcon();
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const cartItems = useSelector((state) => state.cart.products);

  const toggleCart = () => {
    dispatch(currentState(!isCartOpen));
  };

  return (
    <>
      <StyledCartBox className="cartbox" onClick={toggleCart}>
        <img src={cartIcon} alt="cart icon" />
        <a href="#FIXME" className="cartIcon">
          {cartItems.length} items
        </a>
      </StyledCartBox>
      {isCartOpen && (
        <>
          <Cart cartItems={cartItems} />
          <StyledCartOverlay onClick={toggleCart}></StyledCartOverlay>
        </>
      )}
    </>
  );
};

export default CartBox;
