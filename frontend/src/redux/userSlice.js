import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice=createSlice({
    name: "user",
    initialState,
    reducers:{
        LOGIN: (state,{payload})=>{
            return {
                ...state, payload
            }
        },
        LOGOUT: (state, {payload})=>{
            return {}
        }
    }
})

export const {LOGIN, LOGOUT}= userSlice.actions;
export default userSlice.reducer;
