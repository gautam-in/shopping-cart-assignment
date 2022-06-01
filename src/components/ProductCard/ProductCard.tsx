import React from "react";
import { useViewport } from "../../hooks/useViewport";
import type { Product, ProductCardProps } from "../../types/customTypes";
import "./ProductCard.scss";

export const ProductCard = ({product, cartDispatch}: ProductCardProps) => {
  const windowWidth = useViewport();
  
  const handleClick = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    console.log("Clicked on product: ", event.target.innerText.indexOf("Buy Now"));
    console.log("Product: ", product);
    if(event.target.innerText.indexOf("Buy Now") != -1) {
      cartDispatch({ type: "add-item", data: product })
    }
  }

  return (
    <div className="product-card" onClick={handleClick}>

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
        { `Buy Now @ Rs. ${product.price}` } 
      </button>) }
    </div>
  )
}
