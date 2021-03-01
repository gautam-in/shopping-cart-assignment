import React, { useState } from "react";
import "./cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { handlecartupdate } from "../../Redux/action";
import Item from "./lib/items";

function Cart({ setCart }) {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [confirm, setConfrm] = useState(false);
  function close(e) {
    e.stopPropagation();
    setCart(false);
  }

  function confirmOrder() {
    setConfrm(true);

    setTimeout(() => {
      setConfrm(false);
      setCart(false);
      dispatch(handlecartupdate());
    }, 3000);
  }

  function price() {
    let p = 0;
    for (let item of cart) {
      p = item.price * item.qty + p;
    }
    return p;
  }
  return (
    <div onClick={close} className="container">
      {confirm && (
        <div className={"dialog"}>
          <div>
            <h2>Thank you for shopping !!! </h2>
          </div>
        </div>
      )}
      <div
        style={{ height: "600px" }}
        onClick={(e) => e.stopPropagation()}
        className="cart"
      >
        <header>
          <span> My Cart({cart.length})</span>
          <span className={"cross"} onClick={close}>
            x
          </span>{" "}
        </header>
        {cart.length ? (
          <div style={{ height: "460px", overflow: "auto" }}>
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
              <div onClick={confirmOrder} className="btn checkoutBtn">
                <span>Proceed to checkout</span>
                <span>
                  Rs. {price()} &nbsp;&nbsp;&nbsp; <b>{"  >"}</b>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="lowest">
            <span>No items in your cart</span>
            <span>Your favourite items are just a click away</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
