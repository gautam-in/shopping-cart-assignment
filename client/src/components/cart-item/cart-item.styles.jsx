import styled from 'styled-components';
import { device } from '../../utils/breakpoints/devices';

const white = '#ffffff';
const red = '#c12956';

export const CartItemContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${white};
  align-items: flex-start;
  img {
    width: 6rem;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    font-size: 1rem;
  }
`;

export const QuantityIcon = styled.span`
  background-color: ${red};
  border-radius: 50%;
  padding: 0.15rem 0.5rem;
  cursor: pointer;
  color: ${white};
  margin: 0 1rem;
  font-size: 1.25rem;
`;

export const CartitemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const SingleItemTotal = styled.div`
  font-size: 1.25rem;
`;

export const CartItemActionButtons = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  @media ${device.laptop} {
    gap: 0.5rem;
  }
`;
