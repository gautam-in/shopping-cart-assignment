import { AuthAPI } from "@api/AuthAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showMessage } from "./toastReducer";

// initialize userToken from local storage
const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = userInfo
    ? { isLoggedIn: true, userInfo }
    : { isLoggedIn: false, userInfo: null };

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const data = await AuthAPI.login(email, password);
            return { userInfo: data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(showMessage({
                type: "danger",
                message
            }));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthAPI.logout();
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.userInfo = action.payload.userInfo;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.userInfo = null;
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.isLoggedIn = false;
            state.userInfo = null;
        })
    }
});

export default authSlice.reducer;
