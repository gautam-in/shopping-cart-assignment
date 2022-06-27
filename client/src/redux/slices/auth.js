import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isUserLoggedIn: false,
    userEmail: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsUserLoggedIn: (state, action) => {
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };
    },
    setUserEmail: (state, action) => {
      return {
        ...state,
        userEmail: action.payload,
      };
    },
  }
});

// Action creators are generated for each case reducer function
export const { setIsUserLoggedIn,setUserEmail } = authSlice.actions;

export default authSlice.reducer;
