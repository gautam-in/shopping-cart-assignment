import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            const existingItem = state.filter(item => item.id === action.payload.id);
            if(existingItem.length > 0){
                existingItem[0].qty++;
                console.log(existingItem);
                state = state.map(item => item.id === existingItem[0].id ? existingItem : item);
            } else {
                const {id,name,price,category,imageURL} = action.payload;
                state.push({id,name,imageURL,price,category,qty:1});
            }
        },

        addCartItemCount:(state,action)=>{
            state = state.map(item => item.id === action.payload ? item.qty++ : item);
        },

        subtractCartItemCount:(state,action)=>{
            const existingItem = state.filter(item => item.id === action.payload);
            if(existingItem[0].qty ===1){
                state = state.filter(item => item.id !== action.payload);
                return state;
            } else
            state = state.map(item => item.id === action.payload ? item.qty-- : item);
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;