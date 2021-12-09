import Image from "components/HtmlElements/Image";
import React from "react";
import { CART_ACTIONS } from "redux/modules/cart";

import "./CartItem.scss";

export default function CartItem({ product, updateQuantity }) {
  return (
    <div className="CartItem">
      <Image src={product.imageURL} className="CartItem__image" />
      <div className="CartItem__info-quantity">
        <p className="CartItem__name">{product.name}</p>
        <div className="CartItem__quantity-container">
          <button
            className="CartItem__plus-minus"
            onClick={() => updateQuantity(product, CART_ACTIONS.SUBSTRACT)}
          >
            -
          </button>
          <p className="CartItem__quantity">{product.quantity}</p>
          <button
            className="CartItem__plus-minus"
            onClick={() => updateQuantity(product, CART_ACTIONS.ADD)}
          >
            +
          </button>
          <p style={{ margin: "0 24px" }}>X</p>
          <p className="CartItem__price">Rs. {product.price}</p>
          <p className="CartItem__total">{`Rs. ${
            product.price * product.quantity
          }`}</p>
        </div>
      </div>
    </div>
  );
}
