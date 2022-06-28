import { StlyledMobileCartHeader, StyledAdImageContainer, StyledCartAd, StyledMobileCartDetails, StyledMobileCartTitle, StyledNoItemContainer } from './CartMobile.styled';

import CartItem from '../CartItem';
import React from 'react'
import { getCartAdvertise } from '../../../../services/ApiService';
import { useSelector } from 'react-redux';

const CartMobile = ({ cartItems }) => {
  const overallCartItems = useSelector((state) => state.cart.products);
  const cartAd = getCartAdvertise();
  const cartQuantity = cartItems.length;
  const cartItemsLength = `(${overallCartItems.length} item)`;

  return (
    <>
      <StlyledMobileCartHeader
        className="cart-header"
        isEmpty={cartQuantity ? false : true}
      >
        <StyledMobileCartTitle> My Cart</StyledMobileCartTitle>
        {cartQuantity ? <span>{cartItemsLength}</span> : ''}
      </StlyledMobileCartHeader>
      {cartItems && cartQuantity > 0 ? (
        <StyledMobileCartDetails >
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
        </StyledMobileCartDetails>
      ) : (
        <StyledNoItemContainer className="no-items">
          <h5>No Items in your cart</h5>
          <p>Your favourite items are just click away</p>
        </StyledNoItemContainer>
      )}
    </>
  );
};
export default CartMobile;