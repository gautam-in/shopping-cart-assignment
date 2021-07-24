import { memo } from 'react';
import { HeaderContainer } from './styles/CartStyle';
import { useAppData } from '../lib/store';

const CartIcon = () => {
  const contextData = useAppData();
  const { toggleCart } = contextData;
  const { totalCart } = contextData?.data;
  return (
    <HeaderContainer
      tabIndex="0"
      onClick={() => {
        toggleCart();
      }}
      onKeyPress={(e) => (e.code === 'Enter' ? toggleCart() : null)}
    >
      <img src="/static/images/cart.svg" alt="cart-icon" />
      <span>{totalCart} items</span>
    </HeaderContainer>
  );
};

export default memo(CartIcon);
