import React from "react";

import Button from "../common/button";
import Image from "../common/image";

import "./index.scss";

import { mrpLabel, ruppeeLabel } from "../../constant";

const CartItem = ({
  item,
  handleIncrementItem,
  handleDecrementItem,
  handleRemoveItem,
}) => {
  // increment cart item qty
  const handleIncrementItemQty = () => {
    handleIncrementItem && handleIncrementItem(item);
  };

  // decrement cart item qty
  const handleDecrementItemQty = () => {
    handleDecrementItem && handleDecrementItem(item);
  };

  // remove item from cart
  const handleRemoveItemQty = () => {
    handleRemoveItem && handleRemoveItem(item);
  };

  const handleDecideClick = () => {
    if (item?.count <= 1) {
      handleRemoveItemQty();
    } else {
      handleDecrementItemQty();
    }
  }

  return (
    <div className="cart-item" key={item.id}>
      <div className="cart-item-image">
        <Image
          imgClassName="img-fluid"
          src_2x={item.imageURL}
          src={item.imageURL}
          alt={item.name}
        />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-title">{item.name}</div>
        <div className="cart-item-calculation">
          <Button
            variant="primary"
            className="button btn-rounded cart-decrement"
            onClick={handleDecideClick}
            id={item.id}
          // disabled={item.count <= 1}
          >
            {item.count <= 1 ? "x" : "-"}
          </Button>

          <span className="cart-qty">{item.count}</span>
          <Button
            variant="primary"
            className="button btn-rounded cart-increment"
            onClick={handleIncrementItemQty}
            id={item.id}
          >
            +
          </Button>

          <span>X</span>
          <span>
            {`${mrpLabel} ${ruppeeLabel}`}
            {item.price}
          </span>
          <div className="total ml-auto">
            {`${ruppeeLabel}`}
            {item.count * item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
