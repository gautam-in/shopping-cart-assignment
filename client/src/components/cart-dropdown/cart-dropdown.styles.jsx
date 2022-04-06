import styled from 'styled-components';

import { BaseButton, InvertedButton } from '../button/button.styles';

const lightGray = '#eeeeee';
const white = '#ffffff';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 40%;

  display: flex;
  flex-direction: column;
  background-color: ${lightGray};
  border: 1px solid black;
  top: 5.75rem;
  right: 0;
  z-index: 5;
  ${BaseButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1rem;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background-color: ${lightGray};
`;

export const CartDropdownHeading = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #33332f;
  padding: 1rem;
  color: ${white};
`;

export const CartDropdownTitle = styled.div`
  span {
    font-weight: 600;
  }
`;

export const CartOfferClaim = styled.div`
  background-color: ${white};
  padding: 1rem;
  text-align: center;
  margin: 0 1rem;
`;

export const CartCheckoutContainer = styled.div`
  background-color: ${white};
  margin-top: 1rem;
  text-align: center;
  padding-bottom: 1rem;
`;

export const CartCheckoutButton = styled(InvertedButton)`
  width: 90%;
  border-radius: 0.15rem;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
`;

export const CartTotal = styled.span`
  margin-right: 0.5rem;
`;
