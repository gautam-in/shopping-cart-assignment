import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import type { CartItemProps } from "../../types/customTypes";
import "./CartItem.scss";

export const CartItem = ({ product, cartDispatch }: CartItemProps) => {
  
  const [itemQuantity, setItemQuantity] = useState(1);

  console.log("Product: ", product);
  const addItem = () => {
    setItemQuantity(prevState =>  prevState + 1);
    cartDispatch({ type: "update-item-qty", data: product});
  }

  const removeItem = () => {
    if(itemQuantity > 1) {
      setItemQuantity(prevState =>  prevState - 1);
      cartDispatch({ type: "update-item-qty", data: product});
    } else {
      cartDispatch({ type: "remove-item", data: product });
    }
  }

  useEffect(() => {
    product.qty = itemQuantity;
  }, [itemQuantity])

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={product.imageURL} alt={product.name}/>
      </div>

      <div className="cart-item__title">
        {product.name}
      </div>  
        
      <div className="cart-item__controls">
        <button onClick={addItem} aria-label="increase item quantity in cart"> <AiOutlinePlus /> </button>
        <div className="cart-item__quantity" aria-label="decrease item quantity in cart"> {itemQuantity} </div>
        <button onClick={removeItem}> <AiOutlineMinus /> </button>
        <span> X &nbsp; Rs. {product.price}</span>
      </div>
    
      <div className="cart-item__price">
        Rs {itemQuantity * product.price}
      </div>
    </div>
  )
}
