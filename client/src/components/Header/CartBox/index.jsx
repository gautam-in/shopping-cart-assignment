import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './Cart';
import Overlay from '../../Utilities/Overlay';
import { StyledCartBox } from './Cartbox.styled';
import { currentState } from '../../../redux/slices/cart';
import { getCartIcon } from '../../../services/ApiService';
import { getNumericalWidth } from '../../../services/getFormattedDataServices';
import theme from '../../../theme';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const CartBox = () => {
  const cartIcon = getCartIcon();
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const cartItems = useSelector((state) => state.cart.products);
  const [cartOverlayClass, setCartOverlayClass] = useState('');

  const toggleCart = () => {
    dispatch(currentState(!isCartOpen));
    setCartOverlayClass('cart-overlay');
  };

  return (
    <>
      <StyledCartBox className="cartbox" onClick={toggleCart}>
        <img src={cartIcon} alt="cart icon" />
        <a href="#cart-icon" id='cart-icon' className="cartIcon">
          {cartItems.length} items
        </a>
      </StyledCartBox>
      {isCartOpen && (
        <>
          <Cart cartItems={cartItems} />
            {
              (width >= getNumericalWidth(theme.breakpoints.SM_TAB)) && 
                (<Overlay styleClass={cartOverlayClass} show={isCartOpen} onOverlayClick={toggleCart}/>)
            }
        </>
      )}
    </>
  );
};

export default CartBox;
