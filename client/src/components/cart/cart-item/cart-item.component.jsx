import React, { useContext } from "react";
import { GlobalState } from "../../../context/reducers/cart-reducer";
import {
  CartItemContainer,
  ItemCount,
  ProductImage,
  ProductInfo,
  TotalAmount,
} from "./cart-item.styles";

const CartItem = ({ id, imageURL, name, price, quantity }) => {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(GlobalState);

  return (
    <CartItemContainer>
      <ProductImage src={imageURL} alt={name} />
      <ProductInfo>
        <h3>{name}</h3>
        <ItemCount>
          <span className="decrement">-</span>
          <h6>{quantity}</h6>
          <span className="increment">+</span>
          <span className="cross">x</span>
          <span className="total">Rs{price}</span>
        </ItemCount>
      </ProductInfo>
      <TotalAmount>
        <span>{quantity * price}</span>
      </TotalAmount>
    </CartItemContainer>
  );
};

export default CartItem;
