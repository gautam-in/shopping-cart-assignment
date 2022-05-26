import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loading: false,
    userDetails: {},
    error: ''
}

const signInSlice = createSlice({
    name: 'signInSlice',
    initialState,
    reducers: {
        setUserDetails(state, action) {
            state.userDetails = action.payload
        },
        clearUserDetails(state) {
            state.userDetails = {}
        }
    },
})

export const { setUserDetails, clearUserDetails } = signInSlice.actions
export default signInSlice