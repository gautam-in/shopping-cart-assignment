import { createSlice } from "@reduxjs/toolkit";

export const addItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export const getItemFromLocalStorage = (key) => {
   const res = localStorage.getItem(key);
   if(res!= null){
    return res;
   }else return null;
}

export const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const initialState = {
    user: getItemFromLocalStorage(),
    isLoggedIn:false
}

export const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        register: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        toggleLogin:(state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
    },
})


export const {register, toggleLogin} = userSlice.actions;
export const userReducer = userSlice.reducer;