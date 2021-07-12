import React from "react";
import { withRouter } from "react-router";
import { LABEL } from "../../../constants/constant";
import "./EmptyCart.scss";
export function EmptyCart(props) {
  const handleClick = () => {
    props.setCartDialog(false);
    props.history.push("/products");
  };
  return (
    <section className="emptyCartContainer" data-test="component-emptycart">
      <section className="cartData">
        <h2>{LABEL.NO_CART_ITEMS}</h2>
        <h5>{LABEL.FAV_ITEMS}</h5>

        <button
          className="emptyCartButton"
          onClick={handleClick}
          data-test="emptycart-button"
        >
          {LABEL.START_SHOPPING}
        </button>
      </section>
    </section>
  );
}
export default withRouter(EmptyCart);
