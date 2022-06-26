import {
  StlyledDesktopCartHeader,
  StyledAdImageContainer,
  StyledCartAd,
  StyledCloseIcon,
  StyledDesktopCartDetails,
  StyledDesktopCartTitle,
  StyledNoItemContainer,
} from './CartDesktop.styled';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../CartItem';
import React from 'react';
import { currentState } from '../../../../redux/slices/cart';
import { getCartAdvertise } from '../../../../services/ApiService';

const CartDesktop = ({ cartItems }) => {
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const overallCartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const cartAd = getCartAdvertise();
  const cartQuantity = cartItems.length;
  const cartItemsLength = `(${overallCartItems.length} item)`;
  const closeCartHandler = () => {
    dispatch(currentState(!isCartOpen));
  };

  return (
    <>
      <StlyledDesktopCartHeader
        className="cart-header"
        isEmpty={cartQuantity ? false : true}
      >
        <StyledDesktopCartTitle> My Cart</StyledDesktopCartTitle>
        {cartQuantity ? <span>{cartItemsLength}</span> : ''}
        <StyledCloseIcon
          className="close"
          title="close"
          onClick={closeCartHandler}
        >
          &#88;
        </StyledCloseIcon>
      </StlyledDesktopCartHeader>
      {cartItems && cartQuantity > 0 ? (
        <StyledDesktopCartDetails >
          <ul className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          {cartQuantity > 0 && (
            <StyledCartAd className="cart-ad">
              <StyledAdImageContainer>
                <img src={cartAd} alt="you won't find cheaper anywhere" />
              </StyledAdImageContainer>
              <p>you won't find cheaper anywhere</p>
            </StyledCartAd>
          )}
        </StyledDesktopCartDetails>
      ) : (
        <StyledNoItemContainer className="no-items">
          <h5>No Items in your cart</h5>
          <p>Your favourite items are just click away</p>
        </StyledNoItemContainer>
      )}
    </>
  );
};

export default CartDesktop;
