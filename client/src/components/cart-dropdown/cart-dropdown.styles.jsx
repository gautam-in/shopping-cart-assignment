import styled from 'styled-components';

import { BaseButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  background-color: white;
  top: 5.75rem;
  right: 0;
  z-index: 5;
  ${BaseButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartDropdownHeading = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #33332f;
  padding: 1rem;
  color: #fff;
`;

export const CartDropdownTitle = styled.div`
  span {
    font-weight: 600;
  }
`;
