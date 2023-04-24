import { Cart } from "@components/Cart/Cart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "@store/cartReducer";

export function CartPage() {
    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const onAdd = (product) => {
        dispatch(add(product))
    };

    const onRemove = (product) => {
        dispatch(remove(product))
    };

    return (
        <Cart
            items={cartData.items}
            totalItems={cartData.totalItems}
            onAdd={onAdd}
            onRemove={onRemove}
            totalPrice={cartData.totalPrice}
        />
    )
}
