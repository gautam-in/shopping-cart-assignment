import React, { useContext } from "react";
import { GlobalState } from "../../context/reducers/cart-reducer";
import CartDisclaimer from "./cart-disclaimer/cart-disclaimer.component";
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  DropdownWrapper,
  EmptyMessageContainer,
} from "./cart.styles";
import CartFooter from "./cart-footer/cart-footer.component";
import CartHeader from "./cart-header/cart-header.components";
import CartItem from "./cart-item/cart-item.component";

const Cart = () => {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(GlobalState);
  return (
    <DropdownWrapper className="addToCartPopup">
      <CartDropdownContainer>
        <CartHeader />
        {cartItems.length > 0 &&
          cartItems.map(({ id, imageURL, name, price, quantity }) => (
            <CartItem
              key={id}
              imageURL={imageURL}
              price={price}
              quantity={quantity}
            />
          ))}
        <CartDisclaimer />
        <CartFooter />
      </CartDropdownContainer>
    </DropdownWrapper>
  );
};

export default Cart;
