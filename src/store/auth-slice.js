import { createSlice } from '@reduxjs/toolkit'

const authSlice= createSlice({
name:"auth",
initialState:{
    isUserLoggedIn:false,
},
reducers:{
    setLoginState: (state, action) =>{
        const loginState = action.payload;
        state.isUserLoggedIn = loginState;
        console.log('loginState ', loginState);

    }
}
})


export default authSlice

// selectors
export const isUserLoggedInState  = (state) => state.isUserLoggedIn

// actions
export const authAction = authSlice.actions