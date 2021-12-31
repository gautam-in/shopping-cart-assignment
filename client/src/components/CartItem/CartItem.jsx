import React from 'react';
import { useDispatch } from 'react-redux';

import { incrementQty, decrementQty } from './../../redux/Cart/actions';

import {
  Card,
  ImgContainer,
  Description,
  QtyWrapper,
  QtyBtn,
  TotalPrice
} from './styles';

const CartItem = ({ imageURL, name, qty, price, id }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <ImgContainer>
        <img src={imageURL} alt={name} />
      </ImgContainer>
      <Description>
        <p>{name}</p>
        <QtyWrapper>
          <QtyBtn
            type="button"
            aria-label="Increment Quantity"
            onClick={() => dispatch(decrementQty(id))}>
            -
          </QtyBtn>
          <span aria-live="assertive" aria-label={`${qty} added`}>{qty}</span>
          <QtyBtn
            type="button"
            aria-label="Decrement Quantity"
            onClick={() => dispatch(incrementQty(id))}>
            +
          </QtyBtn>
          <p> {` X Rs. ${price}`} </p>
        </QtyWrapper>
      </Description>
      <TotalPrice>
        Rs. {qty * price}
      </TotalPrice>
    </Card>
  );
}

export default CartItem;