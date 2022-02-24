import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkoutItems.styles.scss";

const CheckoutItems = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  return (
    <section className="quantity__description">
      <div className="product__image">
        <img src={imageURL} alt={imageURL} />
      </div>
      <div className="product__description">
        <div>{name}</div>
        <div className="product__overview">
          <div className="quantity__conatiner">
            <button
              className="product__quantity"
              onClick={() => addItem(cartItem)}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              className="product__quantity"
              onClick={() => removeItem(cartItem)}
            >
              -
            </button>
            <span>X Rs. {price}</span>
          </div>

          <div>{price * quantity}</div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItems);
