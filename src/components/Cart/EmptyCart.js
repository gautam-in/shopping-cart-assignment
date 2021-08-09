import React from 'react';
import './style.css';



export default function EmptyCart(){
    return(
        <div>
        <div className="cart-no-item-title">
        <p>No items in your cart</p>
        <p className="cart-no-item-subtitle">Your favourite items are just a click away</p>
       
        </div>
        </div>

    )
}