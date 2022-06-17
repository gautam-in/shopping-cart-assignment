import React, { useState } from "react";
import {CloseIcon} from '@mui/icons-material';
export const MiniCart=(props)=>{
        const [cartProducts,setCartProducts]=useState([])
        return (
        <div>
        <div>
        <div>My Cart ( item)</div><div><CloseIcon/></div></div>
        <div className="product-carts-items">
            {cartProducts.length?cartProducts.map(cartProduct=>{
                return (
                    <div>{cartProduct.name}</div>
                )
            }):(<div>
                <div>No items in your cart</div>
                <div>Your favourite items are just a click away</div>
                </div>)}
        </div>
        <div claassName="price-guarnteed-info-banner">
            <div><img src="/static/images/lowest-price.png"/></div>
            <div>You won't find it cheaper anywhere</div>
        </div>
        </div>
        )
}