import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartList:{}
}
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCartList:(state,action)=>{
            // action.payload.count=1;
            const product={...action.payload, count:1}
            state.cartList[action.payload.id]=product
        },
        deleteFromCartList:(state, action)=>{
            delete state.cartList[action.payload.id];
        },
        increaseCount:(state, action)=>{
            state.cartList[action.payload.id].count+=1;
        },
        decreaseCount:(state, action)=>{
            if(state.cartList[action.payload.id].count===1){
                delete state.cartList[action.payload.id];
            }else{
                state.cartList[action.payload.id].count-=1;
            }   
        }
    }
});

export const {addToCartList, deleteFromCartList, increaseCount, decreaseCount}=cartSlice.actions;
export default cartSlice.reducer;