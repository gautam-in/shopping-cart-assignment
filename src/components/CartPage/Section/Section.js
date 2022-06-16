import React from "react";
import "./Section.css";
import Counter from "../Counter/Counter";
import { Typography } from "@mui/material";

export default function Section({ product }) {
  const totalPrice = product?.quantity * product?.price;

  return (
    <section className="cart-section">
      <img src={product?.imageUrl} alt={product?.name} className="image" />
      <Typography variant="subtitle2" className="productTitle">
        {product?.name}
      </Typography>
      <Counter
        id={product?.id}
        quantity={product?.quantity}
        price={product?.price}
        stock={product?.stock}
      />
      <Typography className="totalprice">Rs.{totalPrice}</Typography>
    </section>
  );
}
