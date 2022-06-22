import { StyledCheckout, StyledCheckoutArrow } from './Checkout.styled';

import Button from '../../Utilities/Button';
import React from 'react';

const Checkout = ({ cartPrice }) => {
  return (
    <StyledCheckout className="checkout">
      <Button styleClass="checkout-btn">
        <p>Proceed to checkout</p>
        <span>
          Rs.{cartPrice}
          <StyledCheckoutArrow>&#62;</StyledCheckoutArrow>
        </span>
      </Button>
    </StyledCheckout>
  );
};

export default Checkout;
