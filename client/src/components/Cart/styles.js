import styled from 'styled-components';

import Button from '../Button/Button';

export const CartWrapper = styled.div`
  width: 30%;
  background-color: #eeeeee;
  position: absolute;
  right: 10%;
  bottom: 0;
  cursor: default;
`;

export const CartHeader = styled.div`
  background-color: #1D2124;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  p {
    font-weight: 600;
  }
  p>span {
    font-size: 75%;
  }
  button {
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 105%;
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cccccc;
`;

export const CartBanner = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  column-gap: 10px;
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 5px;
  img {
    width: 100px;
    height: 40px;
  }
  p {
    font-size: 80%;
    font-weight: 600;
  }
`;

export const CartFooter = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  border: 1px solid #cccccc;
  border-top: 0;
  padding: 20px 5px;
  p {
    font-size: 80%;
    font-weight: 600;
  }
`;

export const CustomButtom = styled(Button)`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-weight: 600;
  }
`;

export const Overlay = styled.div`
  position: fixed; 
  display: block; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 2; 
  cursor: not-allowed; 
`;