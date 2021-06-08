import React from "react";
import { withRouter } from "react-router";
import "./EmptyCart.scss";
export function EmptyCart(props) {
  const handleClick = () => {
    props.setCartDialog(false);
    props.history.push("/products");
  };
  return (
    <section className="emptyCartContainer" data-test="component-emptycart">
      <section className="cartData">
        <h2>No items in your cart</h2>
        <h5>Your favourite items are just a click away</h5>

        <button
          className="emptyCartButton"
          onClick={handleClick}
          data-test="emptycart-button"
        >
          Start Shopping
        </button>
      </section>
    </section>
  );
}
export default withRouter(EmptyCart);
