import React from "react";
import CartDisclaimer from "./cart-disclaimer/cart-disclaimer.component";
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  DropdownWrapper,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";
import CartFooter from "./cart-footer/cart-footer.component";
import CartHeader from "./cart-header/cart-header.components";
import CartItem from "./cart-item/cart-item.component";

const CartDropdown = () => {
  return (
    <DropdownWrapper className="addToCartPopup">
      <CartDropdownContainer>
        <CartHeader />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartDisclaimer />
        <CartFooter />
      </CartDropdownContainer>
    </DropdownWrapper>
  );
};

export default CartDropdown;
