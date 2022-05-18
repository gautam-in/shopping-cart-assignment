import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems
)

export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.isOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.length>0 ? cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,0
    ) : 0
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.length>0 ? cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,0
    ) : 0
)

