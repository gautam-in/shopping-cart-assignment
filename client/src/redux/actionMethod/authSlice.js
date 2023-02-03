import { createSlice } from "@reduxjs/toolkit";
    const initialUsers = window.localStorage.getItem('users');
const initialState = {
    users: initialUsers ? JSON.parse(initialUsers) : [],
    loggedInUser:{},
    error:null,
    status:null
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginUser:(state,action) =>{
            const foundUser = state.users.find(user => user.email === action.payload.email);
            if(foundUser){
                if(foundUser.password === action.payload.password){
                    state.loggedInUser = foundUser;
                    state.status = 'success';
                    state.error = null;
                } else {
                    state.status = 'failure';
                    state.error = 'Invalid credentials. Please try again.'
                }
            } else {
                state.status = 'failure';
                state.error = `Email associated with ${action.payload.email} does not exist. Go To Register`;
            }
        },
        registerUser:(state,action) =>{
            const foundUser = state.users.find(user => user.email === action.payload.email);
            if(foundUser){
                    state.status = 'failure';
                    state.loggedInUser = {};
                    state.error = `Email associated with ${action.payload.email} already exist. Go to Login`;
            } else {
                const {firstName,lastName,email} = action.payload;
                state.loggedInUser = {firstName,lastName,email};
                state.error = null;
                state.status = 'success';
                state.users.push(action.payload);
            }
        },
        logoutUser:state =>{
            state.status = null;
            state.loggedInUser = {};
            state.error = null;
        },
        resetError: state =>{
            state.error = null;
            state.status=null;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;