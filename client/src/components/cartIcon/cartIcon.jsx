import React, { useCallback } from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import "./cartIcon.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../redux/home/home.actions";

const CartIcon = () => {
  const cartItems = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleCart()), [dispatch]);
  return (
    <div className="cart-container" onClick={onToggle}>
      <Cart className="cart-icon" />
      <span className="count">{cartItems} items</span>
    </div>
  );
};

export default CartIcon;
