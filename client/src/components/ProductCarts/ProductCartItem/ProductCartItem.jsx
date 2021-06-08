import React from "react";
import { connect } from "react-redux";
import { handleIncrement, handleDecrement } from "../../../store/action";
import "./ProductCartItem.scss";
// import { handleIncrement, handledecrement } from "../../../Redux/action";
// import ActionButton from "../atoms/actionButton/actionButton";
// import ItemImage from "../atoms/itemImage/itemImage"

export function ProductCartItem(props) {
  const { item, handleDecrement, handleIncrement } = props;

  return (
    <section className="itemContainer" data-test="component-productCartItem">
      <img src={item.imageURL} width="60px" height="60px" />
      <section className="itemDescription">
        <h3>{item.name}</h3>
        <section>
          <button
            onClick={() => handleDecrement(item)}
            className="buttonAction"
            data-test="button-decrement"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleIncrement(item)}
            className="buttonAction"
          >
            +
          </button>
          <span>X&nbsp;&nbsp; Rs.{item.price} </span>
        </section>
      </section>
      <section className="priceItem" data-test="cartItem-price">
        {" "}
        <span> Rs. {item.price * item.quantity} </span>
      </section>
    </section>
  );
}

export default connect(null, { handleIncrement, handleDecrement })(
  ProductCartItem
);
