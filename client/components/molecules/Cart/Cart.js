import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../atoms/Button/Button";
import CartSelectedProducts from "../CartSelectedProducts.js/CartSelectedProducts";

import "./Cart.scss";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.addItems.items);
  const total = useSelector((state) => state.addItems.total);

  return (
    <div className="cart_container">
      <div className="card_content">
        {items.map((item) => {
          return (
            <CartSelectedProducts
              key={item.id}
              item={item}
              dispatch={dispatch}
            />
          );
        })}
      </div>
      <div className="checkout">
        <div>Promo code can be applied on payment page</div>
        <Button>
          <div className="flexed_jc_sb_ai_center">
            <span>Proceed to Checkout</span>
            Rs. {total}
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Cart;
