import { memo } from 'react';
import { Container } from './styles/CartStyle';
import { useAppData } from '../lib/store';

const CartIcon = () => {
  const contextData = useAppData();
  const { totalCart } = contextData?.data;
  console.log(contextData);
  return (
    <Container>
      <img src="/static/images/cart.svg" alt="cart-icon" />
      <span>{totalCart} items</span>
    </Container>
  );
};

export default memo(CartIcon);
