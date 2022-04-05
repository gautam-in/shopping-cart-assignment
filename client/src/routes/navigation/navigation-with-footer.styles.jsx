import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 6rem;
  align-items: center;
  box-shadow: 0 -13px 20px 3px #333;
`;

export const LogoContainer = styled(Link)`
  img {
    height: 5rem;
    padding: 0 1rem;
  }
`;

export const CartIconContainer = styled.div`
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.6rem 1rem;
  width: auto;
  background-color: #eeeeee;

  text-decoration: none;
`;

export const CartItemCount = styled.span`
  font-size: 1rem;
  width: max-content;
  margin-left: 0.5rem;
  width: 3rem;
`;

export const NavLinks = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-top: 2rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  color: #797979;
  font-weight: 600;
`;

export const ActionButtons = styled.div`
  padding: 0.25rem 0 0.25rem 0.25rem;
`;

export const ActionLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: #424242;
  font-size: 0.9rem;
`;
