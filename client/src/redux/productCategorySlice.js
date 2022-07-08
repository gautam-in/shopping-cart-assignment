import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    id:''
  }

export const productCategorySlice = createSlice({
    name: 'productCategory',
    initialState,
    reducers: {
        selectProductCategory:(state,action)=>{
            state.name=action.payload.name;
            state.id=action.payload.id
        },
        deselectProductCategory:(state)=>{
            state.name='';
            state.id='';
        }
    }
});

export const { selectProductCategory, deselectProductCategory} = productCategorySlice.actions

export default productCategorySlice.reducer;