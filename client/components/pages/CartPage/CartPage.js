import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../molecules/Cart/Cart";
import "./CartPage.scss";

function CartPage() {
  const itemsCount = useSelector((state) => state.addItems.itemsCount);
  return (
    <div className="cart_page_container">
      <div className="cart_page_header">
        {itemsCount === 0 ? `My Cart` : `My Cart (${itemsCount} items)`}
      </div>
      <Cart />
    </div>
  );
}

export default CartPage;
