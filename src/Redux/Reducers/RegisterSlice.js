import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const registerSlice = createSlice({
    name: "register",
    initialState: { users:[] ,currentUser:{authorized:false},register:false,status: null },
    reducers: {
        addUser: (state, action) => {
                const dumyData = {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    email: action.payload.email,
                    password: action.payload.password,
                    authorized:false
                }
                state.users = state.users.concat(dumyData);
                state.register=true;
            },
        checkForUser:(state,action)=>{
            
            state.currentUser.email= action.payload.email;
            state.users.map(item=>{
                if(item.email==action.payload.email && item.password == action.payload.password)
                {
                  state.currentUser.authorized=true;
                }
            })
        },
        signOut:(state,action)=>{
         state.currentUser.authorized=false;
        }
    }
})


// export const home = (state=> state.value);
export const { addUser,checkForUser,signOut } = registerSlice.actions

export default registerSlice.reducer;