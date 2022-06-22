import React, { useState } from 'react';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../../../redux/slices/cart';
import { useDispatch, useSelector } from 'react-redux';

import { StyledCartItem } from './CartItem.styled';
import { getQuantifiedCartItems } from '../../../../services/getFormattedDataServices';

const CartItem = ({ item }) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const cartQuantifiedItems = getQuantifiedCartItems(cartItems);

  const addItemHandler = () => {
    cartQuantifiedItems.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        dispatch(addProductToCart(cartItem));
        setItemQuantity((prev) => prev + 1);
      }
    });
  };

  const removeItemHandler = () => {
    cartQuantifiedItems.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        dispatch(removeProductFromCart(item.id));
        setItemQuantity((prev) => prev - 1);
      }
    });
  };

  if (itemQuantity <= 0) {
    return null;
  }

  return (
    <StyledCartItem className="cart-item">
      <div className="cart-img-container">
        <img src={item.imageURL} alt={item.name} />
      </div>
      <div className="cart-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <div className="cart-item-details-pricing">
          <span
            className="cart-item-quantity--icon"
            onClick={removeItemHandler}
          >
            &#45;
          </span>
          <span className="cart-item-quantity">{itemQuantity}</span>
          <span className="cart-item-quantity--icon" onClick={addItemHandler}>
            &#43;
          </span>
          <span className="cart-item-quantity--multiply">&#120;</span>
          <span className="cart-item-quantity--price">Rs {item.price}</span>
          <span className="cart-item-quantity--total-price">
            Rs {item.price * itemQuantity}
          </span>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
