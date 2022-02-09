import React from "react";

export const CartContext = React.createContext({
    cartItems : {},
    itemCount: 0,
    cartValue: 0,
    addItem : (product) => {},
    reduceItem : (product) => {}
});
