import React, { useState, useEffect } from "react";
import { useViewport } from "../../hooks/useViewport";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import type { CartItemProps } from "../../types/customTypes";
import "./CartItem.scss";

export const CartItem = ({ product, cartDispatch }: CartItemProps) => {
  
  const [itemQuantity, setItemQuantity] = useState(1);
  const classNameForCartItem = useViewport() > 992 ? "cart-item--for-popup" : "cart-item";

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
    <div className={classNameForCartItem}>
      <div className={`${classNameForCartItem}__image`}>
        <img src={product.imageURL} alt={product.name}/>
      </div>

      <div className={`${classNameForCartItem}__title`}>
        {product.name}
      </div>  
        
      <div className={`${classNameForCartItem}__controls`}>
        <button onClick={addItem} aria-label="increase item quantity in cart"> <AiOutlinePlus /> </button>
        <div className={`${classNameForCartItem}__quantity`} aria-label="decrease item quantity in cart"> {itemQuantity} </div>
        <button onClick={removeItem}> <AiOutlineMinus /> </button>
        <span> X &nbsp; Rs. {product.price}</span>
      </div>
    
      <div className={`${classNameForCartItem}__price`}>
        Rs {itemQuantity * product.price}
      </div>
    </div>
  )
}
