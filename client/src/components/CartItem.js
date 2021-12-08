import React from "react";

import Apple from "../static/images/products/fruit-n-veg/apple.jpg";

function CartItem({ item, increaseCountHandler, decreaseCountHandler }) {
  return (
    <React.Fragment>
      <div className="cart_body_product">
        <img src={`${window.location.origin}${item.imageURL}`} />
        <div className="cart_body_product_details">
          <h5>{item.name}</h5>
          <div className="cart_body_product_actions">
            <div className="cart_body_product_actions_main">
              <div className="cart_body_product_actions_main_icons">
                <span onClick={() => decreaseCountHandler(item.id)}>-</span>
                <span id="cart_items_count">{item.count}</span>
                <span onClick={() => increaseCountHandler(item.id)}>+</span>
              </div>
              <div>X Rs.{item.price}</div>
            </div>
            <p>Rs. {item.price * item.count}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartItem;
