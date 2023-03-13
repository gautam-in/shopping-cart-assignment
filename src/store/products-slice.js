import { createSlice } from '@reduxjs/toolkit'
import { original } from 'immer';

const productSlice= createSlice({
name:"product",
initialState:{
    productsData:[],
},
reducers:{

    setProductState: (state, action) =>{
        console.log('setProductState store : ');
        console.log("IMMER STATE : " ,original(state))
        console.log('state ', state, action.payload);
        const productDataState = action.payload;
        return [ ...productDataState];
    },

}
})


export default productSlice

// selectors
export const productsData  = (state) => state.productsData;

// actions
export const productAction = productSlice.actions