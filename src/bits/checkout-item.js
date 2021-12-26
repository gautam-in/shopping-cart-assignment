import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem, clearItem } from "../redux/actions";
import "./styles/checkout-item.css";

const CheckoutItem = ({ cartItem, addAnItem, removeAnItem, clearAnItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <div className="arrow-quantity">
        <span
          className={`arrow-left ${quantity === 1 ? "hidden" : ""}`}
          onClick={() => removeAnItem(cartItem)}
        >
          &#10094;
        </span>
        <span className="quantity">{quantity}</span>
        <span className="arrow-right" onClick={() => addAnItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearAnItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAnItem: (item) => dispatch(addItem(item)),
  removeAnItem: (item) => dispatch(removeItem(item)),
  clearAnItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
