import React from "react";

import Button from "../button";
import CustomLink from "../link";
import { _EMPTY_CART_line1, _EMPTY_CART_line2, _START_SHOP } from "../../../utils/constants";

import './empty-cart.scss';

const EmptyCart = () => {

    return <div className="empty-cart">
        <div>{_EMPTY_CART_line1}</div>
        <div>{_EMPTY_CART_line2}</div>
        <div className="start-shop"><CustomLink href="/products"><Button label={_START_SHOP} /></CustomLink></div>
    </div>
}

export default EmptyCart;