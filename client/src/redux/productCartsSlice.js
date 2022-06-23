import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const productAddToCart = createAsyncThunk(
  'product/addToCart',
  async (productData) => {
    const response = await (await axios.post('http://localhost:5000/addToCart')).data
    return {...response,productData}
  }
)
const initialState = []

export const productCartsSlice = createSlice({
    name: 'productCarts',
    initialState,
    reducers:{
        incrementProductItemQuantity:(state,action)=>{
            const elementIndex=state.findIndex(el=>el.id===action.payload.id);
            state[elementIndex].quantity=state[elementIndex].quantity+1;
        },
        decrementProductItemQuantity:(state,action)=>{
            const elementIndex=state.findIndex(el=>el.id===action.payload.id);
            if(action.payload.quantity===1){
                state.splice(elementIndex,1);
            }
            else{
            state[elementIndex].quantity=state[elementIndex].quantity - 1;
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(productAddToCart.fulfilled, (state, action) => {
            console.log(action)
            if(action.payload.response==='Success'){
                const elementIndex=state.findIndex(el=>el.id===action.payload.productData.id);
                if(!state.length||elementIndex===-1){
                    state.push({...action.payload.productData,quantity:1})
                }
                else{
                    state[elementIndex].quantity=state[elementIndex].quantity+1;
                }
            }
        })
    }
});

export const { incrementProductItemQuantity, decrementProductItemQuantity} = productCartsSlice.actions
export default productCartsSlice.reducer;