import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeQuantityAction,
  fetchCartAction,
  addToCartAction,
  removeCartItemAction,
  addRandomProductsAction,
  removeCartItemBunchAction,
} from "../../Action";
import { store } from "../../store";
import "./CartItem.scss";
const cartStore = (state) => state.cartItems.cartItems;

function CartItem({ cartItem }) {
  const [inputQuantity, setInputQuantity] = useState(cartItem.quantity);
  const [showValidation, setShowValidation] = useState(false);
  const cartSelect = useSelector(cartStore, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    setInputQuantity(cartItem.quantity);
    // store.dispatch(fetchCartAction());
  }, [cartItem.quantity]);
  const increment = () => {
    dispatch(addToCartAction(cartSelect, cartItem));
  };
  const decrement = () => {
    dispatch(removeCartItemAction(cartSelect, cartItem));
  };
  const inputQuantityChange = (e) => {
    const quantity = e.target.value;
    setInputQuantity(quantity);
    if (
        quantity > 0 ||
        quantity == null ||
        quantity == "" ||
        quantity == undefined
      ) {
        dispatch(addRandomProductsAction(cartSelect, cartItem, Number(quantity)));
    } else if (quantity <= 0) {
      setShowValidation(true);
      setInputQuantity("");
    }
  };
  const removeCartItemBunch = () => {
    dispatch(removeCartItemBunchAction(cartSelect,cartItem.id))
  }
  // const handleKeyDown = (event) => {
  //   console.log("User pressed: ", event.key);
  //   if (event.key === "Backspace") {
  //     // 👇️ your logic here
  //     console.log("Backspace key pressed ✅");
  //   }
  // };
  const inputQuantityBlur = () => {
    // To persist existing quantity if input is "" and blured
    if(cartItem.quantity <= 0){
      dispatch(removeCartItemAction(cartSelect, cartItem));
    }
    setInputQuantity(cartItem.quantity);
    setShowValidation(false);
  };
  return (
    <div className="cart-item">
      <div className="image">
        <img src={cartItem.photo} alt={cartItem.name} />
      </div>
      <div className="cart-item-desc">
        <h3>{cartItem.name}</h3>
        <div className="cart-text">
          <div className="counter">
            <button className="btn decrement" onClick={decrement}>
              -
            </button>
            {/* <strong className="quantity">{cartItem.quantity}</strong> */}
            <input
              type="number"
              value={inputQuantity}
              onChange={inputQuantityChange}
              // onKeyDown={event => handleKeyDown(event)}
              // onFocus={(e) => e.target.select()}
              onBlur={inputQuantityBlur}
            />
            <button className="btn increment" onClick={increment}>
              +
            </button>
            <span className="price-per-item">
              <span className="multiply">X</span>Rs.{cartItem.price}
            </span>
          </div>
          <div className="total">Rs.{cartItem.price * cartItem.quantity}</div>
        </div>
        {showValidation ? (
          <div className="input-validation">
            Negative value and 0 are not allowed
          </div>
        ) : null}
      </div>
      <button className="remove-item" onClick={removeCartItemBunch}>
        X
      </button>
    </div>
  );
}

export default CartItem;
