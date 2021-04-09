import React, { useState } from "react";
import "./cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { handlecartupdate } from "../../store/actions/action";
import Item from "./items";

const Cart = ({ setCart }) => {

  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [confirm, setConfrm] = useState(false);

  const close = (e)=> {
    e.stopPropagation();
    setCart(false);
  }

  const confirmOrder= () => {
    setConfrm(true);
    setTimeout(() => {
      setConfrm(false);
      setCart(false);
      dispatch(handlecartupdate());
    }, 1000);
  }

  const price= () => {
    let p = 0;
    for (let item of cart) {
      p = item.price * item.qty + p;
    }
    return p;
  }

  return (
    <div onClick={close} className="container">
      {confirm && (
        <div className={"popup"}>
          <div className="thanks__response">
            <h2>Thank you for shopping !!! </h2>
          </div>
        </div>
      )}
      <div
        style={{ height: "600px" }}
        onClick={(e) => e.stopPropagation()}
        className="cart"
      >
        <div className="cart__header">
          <span> My Cart({cart.length})</span>
          <span className={"cart__cross"} onClick={close}>
            x
          </span>{" "}
        </div>
        {cart.length ? (
          <div style={{ height: "460px", overflow: "auto" }}>
            <div>
              {cart.map((i,idx) => (
                <Item i={i} key={idx}/>
              ))}
            </div>
            <div className="cart_message">
              <div>
                <img src="./static/images/lowest-price.png" alt="lowest-price" />
              </div>
              <div>You won't find it cheaper anywhere.</div>
            </div>
            <div className={"checkout"}>
              <small>Promo code can be applied on payment page.</small>
              <div onClick={confirmOrder} className="btn btn__checkout">
                <span>Proceed to checkout</span>
                <span>
                  Rs. {price()} &nbsp;&nbsp;&nbsp; <b>{"  >"}</b>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart_message">
            <span>No items in your cart</span>
            <span>Your favourite items are just a click away</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
