import { createSlice } from '@reduxjs/toolkit'

const cartSlice= createSlice({
name:"cart",
initialState:{
    cartItems: [],
    totalCartPrice: 0,
    totalItems: 0,
    showCartModal: false,
},
reducers:{
    setCartState: (state, action) =>{
        console.log("SetCartState : ",state, action);
        state.cartItems.push(action.payload);
        state.totalCartPrice+=action.payload.price;
        state.totalItems+=1;
    },
    
}
})


export default cartSlice

// selectors
export const cartState  = (state) => state

// actions
export const cartAction = cartSlice.actions