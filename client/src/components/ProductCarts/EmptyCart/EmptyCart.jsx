import React from "react";
import { withRouter } from "react-router";
import "./EmptyCart.scss";
function EmptyCart(props) {
  const handleClick = () => {
    props.setCartDialog(false);
    props.history.push("/products");
  };
  return (
    <div className="emptyCartContainer" style={{}}>
      <div className="cartData">
        <h2>No items in your cart</h2>
        <h5>Your favourite items are just a click away</h5>

        <button className="emptyCartButton" onClick={handleClick}>
          Start Shopping
        </button>
      </div>
    </div>
  );
}
export default withRouter(EmptyCart);
