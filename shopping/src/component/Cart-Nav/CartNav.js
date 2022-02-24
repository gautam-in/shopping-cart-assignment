import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartContext } from "../../Context/CartContext";
import "./cartNav.css";

function CartNav(props) {
  const { cart: productsCount } = useContext(cartContext);
  const { cartItems } = useContext(cartContext);
  const { open, setOpen } = useContext(cartContext);
  const [totalCount, setTotalCount] = useState(0);

  // let temptotalCount = 0;
  // useEffect(() => {
  //   cartItems.map((item) => {
  //     temptotalCount = +item.count;
  //  ß });
  //   setTotalCount(temptotalCount);
  // }, [cartItems]);

  return (
    <div>
      <button
        className="cart-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="sr-only">Cart Item</span>
        <img src="static/images/cart.svg" />
      </button>
      <span> {productsCount} item</span>
    </div>
  );
}

export default CartNav;
