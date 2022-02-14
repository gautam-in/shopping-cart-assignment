import React from "react";
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";
import CartHeader from "./cart-header/cart-header.components";

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartHeader />
      <CartItemsContainer>
        <EmptyMessageContainer>
          <h2>No items in your cart</h2>
          Your favourite items are just a click away
        </EmptyMessageContainer>
        <CartDropdownButton size="size">Start Shopping</CartDropdownButton>
      </CartItemsContainer>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
