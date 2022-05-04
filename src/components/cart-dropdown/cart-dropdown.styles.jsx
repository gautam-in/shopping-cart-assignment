import styled from 'styled-components';
import devices from '../media/devices';

import {
  CustomButton
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: fixed;
  width: 30%;
  height: 30.5em;
  left: 60%;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 5;
  overflow: auto;

  ${CustomButton} {
    margin-top: auto;
  }

  @media ${devices.mobile} {
    width: 17.5em;
    height: 28em;
    left: 42%;
    bottom: 0;
  }

  @media ${devices.tablet} {
    width: 47.5em;
    height: 48em;
    top: 10%;
    left: 0;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  height: 2em;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  text-align: center;
`;

export const LowestPrice = styled.span`
  display: flex;
  background-color: white;
  padding: 5px;
  text-align: center;
  align-items: center;
  margin: 2%;
  border-radius: 5px;
`;

export const CartItems = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: lightgray;  
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const Promo = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

export const Footer = styled.footer`
  background-color: white;

  button {
    width: 96%;
  }
`