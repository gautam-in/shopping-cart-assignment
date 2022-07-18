import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        products : [],
        totalQuantity: 0,
        totalAmount : 0
    },
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.products.find((item) => item.product._id === newItem.product._id);
            state.totalQuantity++;
            state.totalAmount += newItem.product.price * newItem.quantity;
            if (!existingItem) {
                state.products.push({
                   product: newItem.product,
                   quantity: newItem.quantity
                });

            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.products.find(item => item.product._id === id);
            state.totalQuantity--;
            state.totalAmount -= existingItem.product.price;
            if (existingItem.quantity === 1) {
                state.products = state.products.filter(item => item.product._id !== id);
            } else {
                existingItem.quantity--;
            }
        }
    }

});
export const cartActions = cartSlice.actions;

export default cartSlice;