import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartList: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleAddToCart: (state, action) => {
            if(state.cartList.length > 0){
                if(state.cartList.map(item=>item.id).includes(action.payload.id)){
                    let changedCartItem = state.cartList.find(({ id }) => id === action.payload.id)
                    changedCartItem.quantity = changedCartItem.quantity + 1
                    let filteredCartList = state.cartList.filter(item=> item.id !== action.payload.id)
                    state.cartList = [...filteredCartList, changedCartItem].sort((a, b) => a.name.localeCompare(b.name))
                }else{
                    state.cartList = [...state.cartList, action.payload].sort((a, b) => a.name.localeCompare(b.name))
                }
            }else {
                state.cartList = [action.payload]
            }
        },
        handleCartQuantity: (state, action) => {
            if(action.payload.type === 'remove-one'){
                let currentCartItem = state.cartList.find(({ id }) => id === action.payload.id)
                if(currentCartItem.quantity === 1){
                    let newList = state.cartList.filter(item => item.id !== action.payload.id).sort((a, b) => a.name.localeCompare(b.name))
                    state.cartList = newList
                }else{
                    currentCartItem.quantity = currentCartItem.quantity - 1
                    let filteredCartList = state.cartList.filter(item=> item.id !== action.payload.id)
                    state.cartList = [...filteredCartList, currentCartItem].sort((a, b) => a.name.localeCompare(b.name))
                }
            } 
            if(action.payload.type === 'add-one') {
                const newList = state.cartList.map((item)=> {
                    if(item.id===action.payload.id){
                        let quantity = item.quantity + 1
                        return {...item, quantity}
                    }else{
                        return item
                    }
                })
                state.cartList = newList.sort((a, b) => a.name.localeCompare(b.name))
            }
        }
    },
});

export const {
    handleAddToCart,
    handleCartQuantity
  } = cartSlice.actions;

export default cartSlice.reducer;