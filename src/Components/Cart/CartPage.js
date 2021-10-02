import React, { useContext } from "react";
import CartTablet from "./CartTablet"
import { GlobalAppContext } from "../../Context/GlobalAppContext";

export default function CartPage() {
  const {
    cartItems: { count, products },
  } = useContext(GlobalAppContext);

  const countItems = count === 1 ? `${count} item` : `${count} items`;
  return (
    <main className="cartpage">
      <h1 className="cartpage-title">My Cart ({countItems})</h1>
      <CartTablet count={count} products={products} />
    </main>
  );
}
