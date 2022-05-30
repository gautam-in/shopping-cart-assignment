import React from "react";
import type { Product } from "../../types/customTypes";
import "./ProductCard.scss";

export const ProductCard = (product: Product) => {
  return (
    <div className="product-card">

      <div className="product-card__title">{product.name}</div>
      
      <div className="product-card__image">
        <img src={product.imageURL} alt={product.name}/>
      </div>
      <div className="product-card__description">{product.description}</div>

      <div className="product-card__price-button">
        <div>MRP. Rs {product.price}</div>
        <button>Buy Now</button>
      </div>

    </div>
  )
}
