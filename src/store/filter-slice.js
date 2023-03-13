import { createSlice } from '@reduxjs/toolkit'

const filterSlice= createSlice({
name:"filter",
initialState:{
    filterProductCategory:'',
},
reducers:{
    filterProductCategory: (state, action) =>{
        
        state.filterProductCategory = action.payload
        console.log('filterProductCategory ', state.filterProductCategory, action.payload);

    }
}
})


export default filterSlice

// selectors
export const filterProductCategory  = (state) => state.filterProductCategory

// actions
export const filterAction = filterSlice.actions