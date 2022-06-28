import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHamMenuOpen: false,
  overflowHidden: '',
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
    setOverflowHidden: (state, action) => {
      return {
        ...state,
        overflowHidden: action.payload,
      };
    },
  }
});

// Action creators are generated for each case reducer function
export const { setIsHamMenuOpen, setOverflowHidden } = homeSlice.actions;

export default homeSlice.reducer;
