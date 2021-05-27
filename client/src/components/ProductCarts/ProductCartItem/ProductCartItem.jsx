import React from "react";
import { connect } from "react-redux";
import { handleIncrement, handleDecrement } from "../../../store/action";
import "./ProductCartItem.scss";
// import { handleIncrement, handledecrement } from "../../../Redux/action";
// import ActionButton from "../atoms/actionButton/actionButton";
// import ItemImage from "../atoms/itemImage/itemImage"

function ProductCartItem(props) {
  const { item, handleDecrement, handleIncrement } = props;

  return (
    <div className="itemContainer">
      <img src={item.imageURL} width="60px" height="60px" />
      <div className="itemDescription">
        <h3>{item.name}</h3>
        <div>
          <button
            onClick={() => handleDecrement(item)}
            className="buttonAction"
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
        </div>
      </div>
      <div className="priceItem"> Rs. {item.price * item.quantity} </div>
    </div>
  );
}

export default connect(null, { handleIncrement, handleDecrement })(
  ProductCartItem
);
