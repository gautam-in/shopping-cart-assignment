import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    form: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: ''
};

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setInitialValue: (state, {payload}) => {
        switch (payload.name) {
            case  'form':
                return {
                  ...state,
                    form: payload.value,
                };
            case  'firstname':
                return {
                    ...state,
                    firstname: payload.value,
                };
            case  'lastname':
                return {
                    ...state,
                    lastname: payload.value,
                };
            case  'email':
                return {
                    ...state,
                    email: payload.value,
                };
            case  'password':
                return {
                    ...state,
                    password: payload.value,
                };
            case  'confirm_password':
                return {
                    ...state,
                    confirm_password: payload.value,
                };                                                        
            default:
                break;
        }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInitialValue } = formSlice.actions;

export default formSlice.reducer;
