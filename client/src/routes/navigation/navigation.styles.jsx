import styled from 'styled-components';
import { ReactComponent as CartIconsSVG } from './../../assets/icons/cart.svg';
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 6rem;
  padding: 0.5rem;
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
`;

export const CartIcon = styled(CartIconsSVG)`
  width: 24px;
  height: 24px;
  fill: #bf2856;
`;

export const CartItemCount = styled.span`
  position: absolute;
  font-size: 1rem;
  width: max-content;
  left: 2.5rem;
`;

export const NavLinks = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-top: 2rem;
`;

export const NavLink = styled.span`
  text-decoration: none;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
`;
