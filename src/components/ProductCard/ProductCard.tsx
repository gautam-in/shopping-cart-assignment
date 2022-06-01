import React from "react";
import { useViewport } from "../../hooks/useViewport";
import type { Product } from "../../types/customTypes";
import "./ProductCard.scss";

export const ProductCard = (product: Product) => {
  const windowWidth = useViewport();
  
  return (
    <div className="product-card">

      <div className="product-card__title">{product.name}</div>
      
      <div className="product-card__image">
        <img src={product.imageURL} alt={product.name}/>
      </div>
      <div className="product-card__description">{product.description}</div>

      { windowWidth > 992 ? 
      (<div className="product-card__price-button-desktop">
        <div>MRP. Rs {product.price}</div>
        <button>Buy Now</button>
      </div>) : 
      (<button className="product-card__price-button-mobile">
        { `Buy Now @ ${product.price}` } 
      </button>) }
    </div>
  )
}
