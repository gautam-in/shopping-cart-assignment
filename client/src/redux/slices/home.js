import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHamMenuOpen: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setIsHamMenuOpen: (state, action) => {
      return {
        ...state,
        isHamMenuOpen: action.payload,
      };
    },
  }
});

// Action creators are generated for each case reducer function
export const { setIsHamMenuOpen } = homeSlice.actions;

export default homeSlice.reducer;
