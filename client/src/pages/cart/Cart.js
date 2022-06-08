import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../../redux/cart-slice";
const Cart = () => {
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.cartSlice.count)
  const items = useSelector((state) => state.cartSlice.cartItems);
  const total= useSelector((state)=>state.cartSlice.total)
  console.log(items);
  return (
    <div className="cartContainer">
    <header className="cartTitleContainer">
        <h1>My Cart({count} items)</h1>
    </header>
      <section className="itemsContainer">
        {items.map((item) => (
          <div className="cartItemCard">
            <aside className="itemDetails">
              <img src={item.img1} className="cartItemImg" />
              <div className="">
                <p>{item.pname}</p>
                <div className="qtyAdjustContinaer">
                  <button
                    className="qtyButton"
                    onClick={() => dispatch(CartActions.removeProduct(item))}
                  >
                    -
                  </button>{" "}
                  <span>{item.qty}</span>
                  <button
                    className="qtyButton"
                    onClick={() => dispatch(CartActions.addProduct(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            </aside>
            <div className="itemPriceDetails">
              <p  onClick={()=>dispatch(CartActions.removeProduct(item))}>Remove</p>
              <p style={{ marginTop: 10 }}>Rs.{item.totalPrice}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="totalPriceDetailContainer">
            <h3>Promo Can be applied</h3>
            <div className="totalPriceShowButton"><h3>Total</h3><h3>RS.{total}</h3></div>
      </div>
    </div>
  );
};
export default Cart;
