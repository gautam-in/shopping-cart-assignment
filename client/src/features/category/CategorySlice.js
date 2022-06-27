import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    data:[],
    loading:"true",
    error:"",
    updatedSelectedCategory:{
        categoryId:0,
   

    }
}

export const fetchCategories=createAsyncThunk(
    'category/fetchCategories',async()=>{
      const response=  await axios.get("http://localhost:4000/categories")
      return response.data
    }
)
const CategorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        updatedSelectedCategory(state,action){
            console.log("selected category is",action.payload)
            state.updatedSelectedCategory.categoryId=action.payload.id
           

        }},
    extraReducers:{
        [fetchCategories.pending]:state=>{
            state.loading=true
            state.data=[]
            state.error=""
        },
        [fetchCategories.fulfilled]:(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=""
        },
        [fetchCategories.rejected]:(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=""
        }




    }
})

export default CategorySlice.reducer

export const {updatedSelectedCategory}=CategorySlice.actions