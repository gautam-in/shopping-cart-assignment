import React, { useContext } from "react";
import { Product } from "../apis/product";
import { CartContext } from "../context/cart";
import "./product-card.scss";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addCartItem } = useContext(CartContext);
  return (
    <li className="product-card-item" onClick={(_) => addCartItem(product)}>
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
