import React from "react";
import { Product } from "../apis/product";
import "./product-card.scss";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <li className="product-card-item">
      <div className="product-card">
        <img
          alt={product.description}
          src={product.imageURL}
          className="product-image"
        />
        <p style={{ textAlign: "center", marginTop: "5px" }}>{product.name}</p>
      </div>
    </li>
  );
};

export default ProductCard;
