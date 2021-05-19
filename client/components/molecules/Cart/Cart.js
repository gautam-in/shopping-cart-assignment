import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "../../atoms/Button/Button";
import CartSelectedProducts from "../CartSelectedProducts.js/CartSelectedProducts";

import lowestOffer from "../../../../static/images/lowest-price.png";

import "./Cart.scss";

function Cart({ handleClose }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.addItems.items);
  const total = useSelector((state) => state.addItems.total);

  const continueShoping = () => {
    if (handleClose) handleClose();
    history.push("/products");
  };

  return (
    <div className={`cart_container ${items.length === 0 && "empty_card"}`}>
      {/* Empty Cart */}
      {items.length === 0 && (
        <>
          <div className="flexed_center_all">
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h4>No items in the cart</h4>
              <div>Your favourite items are just a click away</div>
            </div>
          </div>
          <div style={{ padding: "10px" }}>
            <Button onClick={continueShoping}>Start Shopping</Button>
          </div>
        </>
      )}
      {/* Filled Cart */}
      {items.length > 0 && (
        <>
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
            <div className="flexed_ai_center cheap_offer">
              <img src={lowestOffer} alt="Lowest offers" width="80" />
              <span>You won't find it cheaper anywhere</span>
            </div>
          </div>
          <div className="checkout">
            <div>Promo code can be applied on payment page</div>
            <Button
              onClick={() => {
                if (handleClose) handleClose();
              }}
            >
              <div className="flexed_jc_sb_ai_center">
                <span>Proceed to Checkout</span>
                Rs. {total} &nbsp;&nbsp;&nbsp;&gt;
              </div>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
