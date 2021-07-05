import React from "react";
import "./CartItem.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cart/cartActions";

const CartItem = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state) =>
      state.products &&
      state.products.data &&
      state.products.data.find((_) => _.id === productId)
  );

  const purchaseDetails = useSelector(
    (state) =>
      state.cart &&
      state.cart.itemsAdded &&
      state.cart.itemsAdded.find((_) => _.id === productId)
  );

  const handleDecrement = () => {
    dispatch(decreaseQuantity(productId));
  };
  const handleIncrement = () => {
    dispatch(increaseQuantity(productId));
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={product.imageURL} height={80} alt={product.name} />
      </div>
      <div className="purchase-description">
        <div className="item-name">{product.name}</div>
        <div className="item-quantity">
          <button
            type="button"
            aria-label="decrease quantity by one"
            className="quant-buttons left"
            onClick={handleDecrement}
          >
            -
          </button>
          <span>{purchaseDetails.quantity}</span>
          <button
            type="button"
            aria-label="increase quantity by one"
            className="quant-buttons right"
            onClick={handleIncrement}
          >
            +
          </button>{" "}
          <span aria-label="multiplied-by">x</span>
          &nbsp;Rs.{purchaseDetails.unitPrice}
        </div>
      </div>
      <div className="item-price">Rs.{purchaseDetails.totalPrice}</div>
    </div>
  );
};

export default CartItem;
