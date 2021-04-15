import React from "react";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { handleIncrement, handleDecrement } from "../../store/actions/action";

const CartItem = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // increment cart item qty
  const handleIncrementItemQty = () => {
    dispatch(handleIncrement(item));
  };

  // decrement cart item qty
  const handleDecrementItemQty = () => {
    dispatch(handleDecrement(item));
  };

  const quantity = () => {
    for (let i of cart) {
      if (i.id === item.id) return i.qty;
    }
  };

  let qty = quantity();

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
            disabled={qty < 1}
          >
            -
          </Button>
          <span>{qty}</span>
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
          <div className="total ml-auto">Rs.{qty * item.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
