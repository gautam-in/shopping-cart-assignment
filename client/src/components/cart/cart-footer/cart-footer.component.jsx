import React, { useContext } from "react";
import { GlobalState } from "../../../context/reducers/cart-reducer";
import CustomButton from "../../custom-button/custom-buttom.component";
import { CartFooterContainer } from "./cart-footer.styles";

const CartFooter = () => {
  const {
    state: { cartItems, cartTotal },
    dispatch,
  } = useContext(GlobalState);
  return (
    <CartFooterContainer>
      <p>Promo code can be applied on payment page</p>
      <CustomButton className="btn">
        <span>Proceed to Checkout</span>
        <span className="subtotal">Rs{cartTotal} &#10095;</span>
      </CustomButton>
    </CartFooterContainer>
  );
};

export default CartFooter;
