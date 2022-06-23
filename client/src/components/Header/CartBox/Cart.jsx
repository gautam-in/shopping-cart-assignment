import {
  getCartPrice,
  getQuantifiedCartItems,
} from '../../../services/getFormattedDataServices';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Utilities/Button';
import CartDesktop from './CartDesktop';
import CartMobile from './CartMobile';
import Checkout from '../Checkout';
import React from 'react';
import { StyledCart } from './Cartbox.styled';
import { currentState } from '../../../redux/slices/cart';
import theme from '../../../theme';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Cart = ({ cartItems }) => {
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const cartQuantifiedItems = getQuantifiedCartItems(cartItems);
  const cartPrice = getCartPrice(cartQuantifiedItems);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const TAB_WIDTH = parseInt(
    theme.breakpoints.TAB.substring(
      0,
      theme.breakpoints.TAB.length - 2
    )
  );

  const startShoppingHandler = () => {
    dispatch(currentState(!isCartOpen));
  };

  if (!isCartOpen) return null;

  return (
    <StyledCart className="cart">
      {width >= TAB_WIDTH ? (
        <CartDesktop cartItems={cartQuantifiedItems} />
      ) : (
        <CartMobile />
      )}
      <div className="promo-code">
        <p>Promo code can be applied on payment page</p>
        {cartItems && cartItems.length > 0 ? (
          <Checkout cartPrice={cartPrice} />
        ) : (
          <Button styleClass="start-shopping" onClick={startShoppingHandler}>
            <p>Start Shopping</p>
          </Button>
        )}
      </div>
    </StyledCart>
  );
};

export default Cart;
