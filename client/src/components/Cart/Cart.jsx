import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import lowPriceImg from './../../assets/lowest-price.png';

import cItems from './data.json';

const CartWrapper = styled.div`
  width: 30%;
  background-color: #eeeeee;
  position: absolute;
  right: 10%;
  bottom: 0;
`;

const CartHeader = styled.div`
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

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cccccc;
`;

const CartBanner = styled.div`
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

const CartFooter = styled.div`
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

const CustomButtom = styled(Button)`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-weight: 600;
  }
`;

const Overlay = styled.div`
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
  cursor: pointer; 
`;

const Cart = () => {
  const items = cItems.filter((_, index) => index < 2).map(item => { return {...item, qty: 1}});
  const noOfItems = items.length;
  console.log(items);
  const price = 344;
  return (
    <Overlay>
      <CartWrapper>
        <CartHeader>
          <p>My Cart <span>{`(${noOfItems} item${noOfItems > 1 ? 's' : ''})`}</span></p>
          <button>X</button>
        </CartHeader>
        <CartItems>
          {items.map(item => <CartItem key={item.id} {...item} />)}
          <CartBanner>
            <img src={lowPriceImg} alt="Lowest Price Guaranteed" />
            <p>You won't find it cheaper anywhere</p>
          </CartBanner>
        </CartItems>
        <CartFooter>
          <p>Promo code can be applied on payment page</p>
          <CustomButtom type="button">
            <span>Proceed to Checkout</span>
            <span>{`Rs. ${price} >`}</span>
          </CustomButtom>
        </CartFooter>
      </CartWrapper>
    </Overlay>
  );
}

export default Cart;