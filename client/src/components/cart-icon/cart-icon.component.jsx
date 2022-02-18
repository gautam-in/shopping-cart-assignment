import React, { useContext } from "react";
import { toggleCart } from "../../context/actions/cartAction";
import { GlobalState } from "../../context/reducers/cart-reducer";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ShoppingIcon } from "./cart-icon.style";
import "./cart-icon.style.scss";

const CartIcon = () => {
  const {
    state: { countItemsCount, toggle },
    dispatch,
  } = useContext(GlobalState);
  console.log(toggle);
  return (
    <div onClick={() => dispatch(toggleCart(toggle))} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countItemsCount} items</span>
    </div>
  );
};

export default CartIcon;
