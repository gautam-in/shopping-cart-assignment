import React, { useState } from "react";
import "./CartItem.scss";
import type { CartItemProps } from "../../types/customTypes";

export const CartItem = ({ product, cartDispatch }: CartItemProps) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const addItem = () => {
    setItemQuantity(prevState =>  prevState + 1);
  }

  const removeItem = () => {
    if(itemQuantity > 1) {
      setItemQuantity(prevState =>  prevState - 1);
    } else {
      cartDispatch({ type: "remove-item", data: product });
    }
  }

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={product.imageURL} alt={product.name}/>
      </div>

      <div className="cart-item__title">
        {product.name}
      </div>  
        
      <div className="cart-item__controls">
        <button onClick={addItem}> + </button>
        <div className="cart-item__quantity"> {itemQuantity} </div>
        <button onClick={removeItem}> - </button>
        <span> X &nbsp; Rs. {product.price}</span>
      </div>
    
      <div className="cart-item__price">
        Rs {itemQuantity * product.price}
      </div>
    </div>
  )
}
