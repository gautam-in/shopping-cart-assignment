import React from "react";

import Button from "../common/button";
import Image from "../common/image";
import LocalStorage from "../common/local-storage";

import "./index.scss";

import label from "./data/index.json";

const CartItem = ({ item }) => {
  // increment cart item qty
  const handleIncrementItemQty = () => {
    const cartItems = LocalStorage.getItem("cartItems");
    cartItems.length &&
      cartItems.map((singleCartItem, index) => {
        if (singleCartItem.id === item.id) {
          singleCartItem.count = singleCartItem.count + 1;
        }
      });
    LocalStorage.setItem("cartItems", cartItems);
    window.location.reload();
  };

  // decrement cart item qty
  const handleDecrementItemQty = () => {
    const cartItems = LocalStorage.getItem("cartItems");
    cartItems.length &&
      cartItems.map((singleCartItem, index) => {
        if (singleCartItem.id === item.id) {
          singleCartItem.count = singleCartItem.count - 1;
        }
      });
    LocalStorage.setItem("cartItems", cartItems);
    window.location.reload();
  };

  // remove item from cart
  const handleRemoveItem = () => {
    let cartItems = LocalStorage.getItem("cartItems");
    cartItems = cartItems.length
      ? cartItems.filter((singleCartItem, index) => {
          return singleCartItem.id !== item.id;
        })
      : [];
    LocalStorage.setItem("cartItems", cartItems);
    window.location.reload();
  };

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
            onClick={
              item.count <= 1 ? handleRemoveItem : handleDecrementItemQty
            }
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
            {`${label.priceLabel} `}
            {item.price}
          </span>
          <div className="total ml-auto">
            {`${label.priceLabel} `}
            {item.count * item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
