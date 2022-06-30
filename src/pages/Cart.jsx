import React, { useEffect } from "react";
import CartHeader from "../components/cart/CartHeader";
import CartFooter from "../components/cart/CartFooter";
import CartItem from "../components/cart/CartItem";

const Cart = ({ data, addToCart, deleteCartItem }) => {
  useEffect(() => {
    window.onkeyup = (event) => {
      if (event.keyCode === 27) {
        let panel = document.getElementById("cartPanel");
        if (panel.classList.contains("active")) {
          panel.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      }
    };
  }, []);

  return (
    <>
      <div
        id={"cartPanel"}
        title={"cart"}
        className="cart-panel"
        role={"group"}
      >
        <CartHeader counter={data ? data.length : 0} />
        <CartItem
          addToCart={addToCart}
          deleteCartItem={deleteCartItem}
          data={data}
          isEmpty={data && data.length > 0 ? false : true}
        />
        <CartFooter
          isEmpty={data && data.length > 0 ? false : true}
          totalPrice={data ? data.reduce((a, b) => a + b.price * b.qty, 0) : 0}
        />
      </div>
      <div
        id="cartOverlay"
        onClick={() => {
          let panel = document.getElementById("cartPanel");
          panel.classList.remove("active");
          document.body.style.overflow = "auto";
        }}
      ></div>
    </>
  );
};

export default Cart;
