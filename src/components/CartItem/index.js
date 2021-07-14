import React from "react";
import { useDispatch } from "react-redux";

const Text = React.lazy(() =>
  import(/* webpackChunkName: "CategoryCardTextComponent" */ "../Text")
);

import {
  decrementProductQuantityInCart,
  incrementProductQuantityInCart,
  removeProductFromCart,
} from "../../redux/actions/cartActions";

import "./style.scss";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const clickHandlerDecrement = () => {
    dispatch(decrementProductQuantityInCart(cartItem));
  };
  const clickHandlerIncrement = () => {
    dispatch(incrementProductQuantityInCart(cartItem));
  };
  const clickHandlerRemove = () => {
    dispatch(removeProductFromCart(cartItem));
  };
  return (
    <div
      aria-label={`You have added ${cartItem.quantity} quantity of ${cartItem.name} worth rupees ${cartItem.totalPrice}`}
      className="cart-item-container"
    >
      <div className="cart-item-container__imageContainer">
        <img src={cartItem.imageURL} alt={cartItem.alt} />
      </div>
      <div className="cart-item-container__itemDetails">
        <div className="cart-item-container__itemDetails__title">
          <Text>{cartItem.name}</Text>
        </div>
        <div className="cart-item-container__itemDetails__actionButtonsAndPrice">
          <div className="cart-item-container__itemDetails__actionButtonsAndPrice__actionButtons">
            <button
              aria-label={`Press enter or click button to ${
                cartItem.quantity === 1
                  ? `remove ${cartItem.name} from your cart`
                  : `decrease quantity of ${cartItem.name} to ${
                      cartItem.quantity - 1
                    }`
              }`}
              className="actionButton"
              onClick={
                cartItem.quantity === 1
                  ? clickHandlerRemove
                  : clickHandlerDecrement
              }
              tabIndex="0"
            >
              <Text className="decrement">-</Text>
            </button>
            <Text className="quantity">{cartItem.quantity}</Text>
            <button
              aria-label={`Press enter or click button to increase quantity of ${
                cartItem.name
              } to ${cartItem.quantity + 1} `}
              className="actionButton"
              onClick={clickHandlerIncrement}
              tabIndex="0"
            >
              <Text className="increment">+</Text>
            </button>
            <Text className="cross">x</Text>
            <Text className="item-price">{`Rs.${cartItem.price}`}</Text>
          </div>
          <div className="cart-item-container__itemDetails__actionButtonsAndPrice__price">
            <Text>{`Rs.${cartItem.totalPrice}`}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
