import styled from 'styled-components';
import { ReactComponent as CartIconsSVG } from './../../assets/icons/cart.svg';

export const CartActionContainer = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ShoppingIcon = styled(CartIconsSVG)`
  width: 24px;
  height: 24px;
  fill: #bf2856;
`;

export const ItemCount = styled.span`
  font-size: 1rem;
  font-weight: 400;
  bottom: 12px;
  color: #000;
  width: 3rem;
`;
