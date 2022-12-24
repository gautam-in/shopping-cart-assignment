import React from "react";
import { Product } from "../apis/product";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <li
      style={{
        flex: "0 0 25%",
        width: "100%",
        height: "100%",
        listStyle: "none",
      }}
    >
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "360px",
        }}
      >
        <img
          alt={product.description}
          src={product.imageURL}
          style={{
            border: "1px solid #ccc",
            textAlign: "center",
            width: "100%",
            height: "100%",
          }}
        />
        <p style={{ textAlign: "center", marginTop: "5px" }}>{product.name}</p>
      </div>
    </li>
  );
};
