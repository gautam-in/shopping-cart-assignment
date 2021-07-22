import { memo } from 'react';
import { HeaderContainer } from './styles/CartStyle';
import { useAppData } from '../lib/store';

const CartIcon = () => {
  const contextData = useAppData();
  const { toggleCart } = contextData;
  const { totalCart } = contextData?.data;
  return (
    <HeaderContainer
      onClick={() => {
        toggleCart();
      }}
    >
      <img src="/static/images/cart.svg" alt="cart-icon" />
      <span>{totalCart} items</span>
    </HeaderContainer>
  );
};

export default memo(CartIcon);
