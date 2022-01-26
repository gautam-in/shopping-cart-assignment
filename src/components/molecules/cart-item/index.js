import React, { useState } from "react";
import Button from "../../atoms/button";
import Heading from "../../atoms/heading";
import Image from "../../atoms/image";

import './cart-item.scss';

const CartItem = ({ cartItem, handleCount }) => {

    return (
        cartItem ? <div className="cart-item-wrapper">
            <div className="cart-item">
            <Image src={cartItem.imageURL} alt={cartItem.name} />
            <div className="name-items-count">
                <Heading heading={cartItem.name} />
                <div>
                    <Button label={'-'} onClick={()=>handleCount(cartItem.id, cartItem.count-1)}/>
                    <div>{cartItem.count}</div>
                    <Button label={'+'} onClick={()=>handleCount(cartItem.id, cartItem.count+1)}/>
                    <div>X</div>
                    <div>{cartItem.price}</div>
                </div>
            </div>
        </div>
        <div>Rs.{cartItem.price*cartItem.count}</div>
        </div>
            : <></>
    )
}

export default CartItem;