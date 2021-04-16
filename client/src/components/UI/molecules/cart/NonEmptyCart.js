import React from 'react';
import Item from "../items";
export default function NonEmptyCart({cart,confirmOrder,price}){
    return (
        <div style={{ height: "100%", overflow: "auto",position:"relative" }}>
            <div className="items">
              {cart.map((i) => (
                <Item i={i} />
              ))}
            </div>
            <div className="lowest">
              <div>
                <img src="./static/images/lowest-price.png" alt="" />
              </div>
              <div>You won't find it cheaper anywhere.</div>
            </div>
            <div className={"checkout"}>
              <small>Promo code can be applied on payment page.</small>
              <button onClick={confirmOrder} className="btn checkoutBtn">
                <span>Proceed to checkout</span>
                <span>
                  Rs. {price()} &nbsp;&nbsp;&nbsp; <b>{"  >"}</b>
                </span>
              </button>
            </div>
          </div>
    )
}