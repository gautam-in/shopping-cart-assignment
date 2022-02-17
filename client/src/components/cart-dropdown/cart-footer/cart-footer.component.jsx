import React from "react";
import CustomButton from "../../custom-button/custom-buttom.component";
import { CartFooterContainer } from "./cart-footer.styles";

const CartFooter = () => {
  return (
    <CartFooterContainer>
      <p>Promo code can be applied on payment page</p>
      <CustomButton className="btn">
        <span>Proceed to Checkout</span>
        <span className="subtotal">Rs148 &#10095;</span>
      </CustomButton>
    </CartFooterContainer>
  );
};

export default CartFooter;
