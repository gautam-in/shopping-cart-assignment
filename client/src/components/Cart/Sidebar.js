import axios from "axios";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { cartStore } from "./Cart.selector";
import LowestPrice from "../../assets/images/lowest-price.png";
import {
  addToCartAction,
  clearCartAction,
  // clearCartAction,
  fetchCartAction,
} from "../../Action";
import { store } from "../../store";
const cartStore = (state) => state.cartItems.cartItems;

function Sidebar({ classes, closeSidebar }) {
  const dispatch = useDispatch();
  // const [cart, setCart] = useState([]);
  // const [categoriesEle, setcategoriesEle] = useState([]);

  const cartSelect = useSelector(cartStore);
  useEffect(() => {
    store.dispatch(fetchCartAction());
  }, []);
  // const removeCartItem = (id) => {
  //   // store.dispatch(clearCartAction(id));
  //   // Fetch after Removing cart item
  //   store.dispatch(fetchCartAction());
  // };
  const clearCart = () => {
    dispatch(clearCartAction());
  };
  const cartTotal = () => {
    const GrandTotal = cartSelect.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    return GrandTotal;
  };
  const cartTotalItems = () => {
    const totalItems = cartSelect.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    return totalItems;
  };
  return (
    <>
      <div className={classes}>
        <div className="cart-heading d-flex">
          <h3>
            My Cart({cartTotalItems()} {cartTotalItems() > 1 ? "Items" : "Item"}
            )
          </h3>
          {cartTotalItems() >= 1 ? (
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          ) : null}
          <span onClick={closeSidebar}></span>
        </div>
        {/* ) : null} */}
        <div
          className={
            "sidebar-content " + (cartSelect.length < 1 ? "empty" : "")
          }
        >
          {/* {cartSelect.length >= 1 ? (
            <button onClick={clearCart}>Clear Cart</button>
          ) : (
            ""
          )} */}
          {cartSelect.length >= 1 ? (
            cartSelect.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem.id.toString()}
                  cartItem={cartItem}
                  // removeCartItem={() => removeCartItem(cartItem.id)}
                />
              );
            })
          ) : (
            <div className="empty-cart">
              <h4>No Items in your Cart!</h4>
              <p>Your favorite items are just clicks away</p>
            </div>
          )}
          {cartSelect.length >= 1 ? (
            <div className="cart-ad d-flex align-items-center">
              <div className="image">
                <img src={LowestPrice} alt="Cart advertisement" />
              </div>
              <p>You won't find it cheaper anywhere</p>
            </div>
          ) : null}
        </div>
        {cartSelect.length >= 1 ? (
          <div className="proceed d-flex flex-column">
            <span>Promo code can be applied on the payment page</span>
            <button type="" className="d-flex justify-content-between">
              <span className="">Proceed to Checkout</span>
              <span className="">Rs.{cartTotal()}</span>
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Sidebar;
