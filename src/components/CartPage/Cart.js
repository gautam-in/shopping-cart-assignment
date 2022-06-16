import React, { useContext } from "react";
import "./Cart.css";
import CartCard from "./CartCard/CartCard";

import { GlobalContext } from "../../context/GlobalContext";
import { Typography } from "@mui/material";

export default function Cart() {
  const {
    cartItems: { count, products },
  } = useContext(GlobalContext);

  const countItems = count === 1 ? `${count} item` : `${count} items`;
  return (
    <main className="cartpage">
      <Typography variant="h6" className="cartPagetitle">
        My Cart ({countItems})
      </Typography>
      <CartCard count={count} products={products} />
    </main>
  );
}
