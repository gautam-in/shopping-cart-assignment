import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementQtyStart,
  decrementQtyStart,
} from "../../containers/Products/ProductActions";
import Button from "../Button/Button";

function CartItem({ item }) {
  const dispatch = useDispatch();
  // increment cart item qty
  const handleIncrementItemQty = () => {
    dispatch(incrementQtyStart(item));
  };

  // decrement cart item qty
  const handleDecrementItemQty = () => {
    dispatch(decrementQtyStart(item));
  };
  return (
    <div className="cart-item" key={item.id}>
      <div className="cart-item-image">
        <img className="img-fluid" src={item.imageURL} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-title">{item.name}</div>
        <div className="cart-item-calculation">
          <Button
            variant="primary"
            className="button btn-rounded"
            onClick={handleDecrementItemQty}
            id={item.id}
            disabled={item.count <= 1}
          >
            -
          </Button>

          <span>{item.count}</span>
          <Button
            variant="primary"
            className="button btn-rounded"
            onClick={handleIncrementItemQty}
            id={item.id}
          >
            +
          </Button>

          <span>x</span>
          <span>Rs.{item.price}</span>
          <div className="total ml-auto">Rs.{item.count * item.price}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
