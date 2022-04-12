import styled from 'styled-components';
import { ReactComponent as CartIconsSVG } from './../../assets/icons/cart.svg';

const black = '#000000';
const red = '#bf2856';

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
  fill: ${red};
`;

export const ItemCount = styled.span`
  font-size: 1rem;
  font-weight: 400;
  bottom: 0.75rem;
  color: ${black};
  width: 3rem;
`;
