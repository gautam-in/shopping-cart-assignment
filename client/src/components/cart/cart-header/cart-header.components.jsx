import React, { useContext } from "react";
import { ReactComponent as Close } from "../../../assets/xmark-solid.svg";
import { toggleCart } from "../../../context/actions/cartAction";
import { GlobalState } from "../../../context/reducers/cart-reducer";
import "./cart-header.style.scss";
const CartHeader = () => {
  const {
    state: { countItemsCount, toggle },
    dispatch,
  } = useContext(GlobalState);
  console.log(toggle);
  return (
    <div className="cart-header">
      <h3>MyCart({countItemsCount} items)</h3>
      <Close
        onClick={() => dispatch(toggleCart(toggle))}
        className="close-icon"
      />
    </div>
  );
};

export default CartHeader;
