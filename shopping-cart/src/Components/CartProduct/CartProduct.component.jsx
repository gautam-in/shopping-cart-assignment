import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../../redux/cart/cart.actions";

import {
  ItemContainer,
  ItemImg,
  Details,
  Title,
  PriceChange,
  Btn,
  TotalPrice,
} from "./CartProduct.styles";

const CartProduct = ({ item }) => {
  const { imageURL, name, quantity, price, item_total } = item;
  const dispatch = useDispatch();
  return (
    <ItemContainer>
      <ItemImg src={imageURL} alt={name} />
      <Details>
        <Title>{name}</Title>
        <PriceChange>
          <Btn onClick={() => dispatch(removeItem(item))}>-</Btn>
          <span>{quantity}</span>
          <Btn onClick={() => dispatch(addItem(item))}>+</Btn>
          <span>X</span>
          <span>Rs.{price}</span>
        </PriceChange>
      </Details>
      <TotalPrice>Rs.{item_total}</TotalPrice>
    </ItemContainer>
  );
};

export default CartProduct;
