import React from "react";
import { DisclaimerWrapper } from "./cart-disclaimer.styles";

const CartDisclaimer = () => {
  return (
    <DisclaimerWrapper>
      <img
        src="./static/images/lowest-price.png"
        alt="Lowest Price Guaranteed logo"
      />
      <span>You won't find it cheaper anywhere</span>
    </DisclaimerWrapper>
  );
};

export default CartDisclaimer;
