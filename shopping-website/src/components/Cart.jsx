import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartToggle } from "../store/cart/cart.action";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../store/cart/cart.selector";
import Button from "./Button";
import "./Cart.scss";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="cartDropdown">
      <h3 className="cartHeading">My Cart ( {cartCount} Items)</h3>
      <div className="cartBody">
        {cartItems.length > 0 ? (
          <div>
              {cartItems.map(cartItem => (
                  <CartItem key={cartItem.id} product={cartItem} />
              )) }
          </div>
        ) : (
          <div className="cartEmptyBody">
            <p style={{ fontWeight: "bold", marginBottom: 0 }}>
              No Items in Your Cart
            </p>
            <p>Your favourite items are just a click away</p>
          </div>
        )}
      </div>
      <div className="cartButtonContainer" onClick={() => dispatch(setCartToggle())}>
        {cartItems.length > 0 ? (
          <div className="cartPresent">
            <p>Proceed to Checkout</p>
            <p>
              Rs {cartTotal} {">"}{" "}
            </p>
          </div>
        ) : (
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Start Shopping
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
