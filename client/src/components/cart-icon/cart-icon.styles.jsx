import styled from 'styled-components';
import { ReactComponent as CartIconsSVG } from './../../assets/icons/cart.svg';

export const CartActionContainer = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
`;

export const CartIconContainer = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ShoppingIcon = styled(CartIconsSVG)`
  width: 1.5rem;
  height: 1.5rem;
  fill: #bf2856;
`;

export const ItemCount = styled.span`
  font-size: 1rem;
  font-weight: 400;
  bottom: 0.75rem;
  color: #000;
  width: 3rem;
`;
