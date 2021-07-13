import { memo } from 'react';
import { Container } from './styles/CartStyle';

const CartIcon = () => (
  <Container>
    <img src="/static/images/cart.svg" alt="cart-icon" />
    <span>{20} items</span>
  </Container>
);

export default memo(CartIcon);
