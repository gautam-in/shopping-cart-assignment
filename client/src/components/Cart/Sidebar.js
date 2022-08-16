import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { cartStore } from "./Cart.selector";
import LowestPrice from "../../assets/images/lowest-price.png";
import {
  clearCartAction,
  // clearCartAction,
  fetchCartAction,
} from "../../Action";
// const cartStore = (state) => state.cartItems.cartItems;
import { cartStore, cartTotalSelect,cartTotalItemsSelect } from "../../Selectors/Cart.selector";

function Sidebar({ classes, closeSidebar }) {
  const dispatch = useDispatch();

  const cartSelect = useSelector(cartStore);
  const cartTotal = useSelector(cartTotalSelect);
  const cartTotalItems = useSelector(cartTotalItemsSelect);

  useEffect(() => {
    dispatch(fetchCartAction());
  }, [dispatch]);
  const clearCart = () => {
    dispatch(clearCartAction());
  };
  return (
    <>
      <div className={classes}>
        <div className="cart-heading d-flex">
          <h3>
            My Cart({cartTotalItems} {cartTotalItems > 1 ? "Items" : "Item"}
            )
          </h3>
          {cartTotalItems >= 1 ? (
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
          {cartSelect.length >= 1 ? (
            cartSelect.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem.id.toString()}
                  cartItem={cartItem}
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
              <span className="">Rs.{cartTotal}</span>
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Sidebar;
