import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.scss";
import { handlecartupdate } from "../../Redux/action";
import Item from "./lib/items";
import { useHistory } from "react-router-dom";

function Cart({ setCart }) {
  const cart = useSelector((store) => store.cart);
  const ref = React.useRef();
  const dispatch = useDispatch();
  const [confirm, setConfrm] = useState(false);

  const history = useHistory();

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
      history.push("home");
    }, 1000);
  }

  function price() {
    let p = 0;
    for (let item of cart) {
      p = item.price * item.qty + p;
    }
    return p;
  }

  React.useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div onClick={close} className="container">
      {confirm && (
        <div className={"dialog"}>
          <div>
            <h2>Thank you for shopping !!!</h2>
          </div>
        </div>
      )}
      <div onClick={(e) => e.stopPropagation()} className="cart">
        <header>
          <span> My Cart({cart.length})</span>
          <button ref={ref} className={"cross"} onClick={close}>
            x
          </button>{" "}
        </header>
        {cart.length ? (
          <div style={{ height: "80%", overflow: "auto" }}>
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
