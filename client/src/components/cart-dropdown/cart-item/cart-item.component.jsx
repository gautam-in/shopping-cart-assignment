import React from "react";
import {
  CartItemContainer,
  ItemCount,
  ProductImage,
  ProductInfo,
  TotalAmount,
} from "./cart-item.styles";

const CartItem = () => {
  return (
    <CartItemContainer>
      <ProductImage src="./static/images/products/baby/mamy.jpg" alt="" />
      <ProductInfo>
        <h3>Apple-Wasgington</h3>
        <ItemCount>
          <span className="decrement">-</span>
          <h6>8</h6>
          <span className="increment">+</span>
          <span className="cross">x</span>
          <span className="total">Rs187</span>
        </ItemCount>
      </ProductInfo>
      <TotalAmount>
        <span>187</span>
      </TotalAmount>
    </CartItemContainer>
  );
};

export default CartItem;
