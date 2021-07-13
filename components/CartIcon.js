import { memo } from 'react';
import { Container } from './styles/CartStyle';
import { BASE_URL } from '../config';

const CartIcon = () => (
  <Container>
    <img src={`${BASE_URL}static/images/cart.svg`} alt="cart-icon" />
    <span>{2} items</span>
  </Container>
);

export default memo(CartIcon);
