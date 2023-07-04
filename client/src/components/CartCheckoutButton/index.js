import React from "react";
import classes from "./cartCheckoutButton.module.scss";
import Button from "../Button";

function CartCheckoutButton({ price, onCheckout }) {
  return (
    <div className={classes.action}>
      <p>Promo code can be applied on payment page</p>
      <Button>
        Proceed to checkout
        <span>
          Rs.{price} &nbsp;&nbsp;&nbsp;&nbsp;{">"}
        </span>
      </Button>
    </div>
  );
}

export default CartCheckoutButton;
