import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAPI from "../../api/axiosAPI";

const initialState = {
  userInfo: {},
  error: {},
  isLoggedIn: false,
};
// First, create the thunk
export const getLoginData = createAsyncThunk("login/fetchData", async () => {
  const userInfo = sessionStorage.getItem("userInfo");

  if (userInfo) {
    return userInfo;
  }
});

// First, create the thunk
export const registerUser = createAsyncThunk(
  "login/registerUser",
  async (data) => {
    let userExists = undefined;
    try {
      try {
        userExists = await axiosAPI.login.getById(data.id);
      } catch (error) {}

      if (userExists) {
        return {
          error: {
            email: "Already exists",
          },
        };
      } else {
        const response = await axiosAPI.login.post(data);
        sessionStorage.setItem("userInfo", {
          userId: response.data.id,
          name: response.data.firstName + response.data.lastName,
        });
        return {
          userInfo: {
            userId: response.data.id,
            name: response.data.firstName + response.data.lastName,
          },
        };
      }
    } catch (error) {
      return {
        error: {
          errorType: "unKnown",
        },
      };
    }
  }
);

export const loginUser = createAsyncThunk("login/loginUser", async (data) => {
  let userExists = undefined;
  try {
    try {
      userExists = await axiosAPI.login.getById(data.email.toUpperCase());
    } catch (error) {}

    if (userExists) {
      if (userExists.data.password !== data.password) {
        return {
          error: {
            password: "password does not match",
          },
        };
      }
      sessionStorage.setItem("userInfo", {
        userId: userExists.data.id,
        name: userExists.data.firstName + userExists.data.lastName,
      });
      return {
        userInfo: {
          userId: userExists.data.id,
          name: userExists.data.firstName + userExists.data.lastName,
        },
      };
    } else {
      return {
        error: {
          email: "email does not existed",
        },
      };
    }
  } catch (error) {
    return {
      error: {
        errorType: "unKnown",
      },
    };
  }
});
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem("userInfo");
      state.isLoggedIn = false;
      state.userInfo = {};
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getLoginData.fulfilled, (state, action) => {
      if (action?.payload) {
        state.userInfo = action.payload;
        state.isLoggedIn = true;
      }
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      // Add user to the state array
      if (action.payload.userInfo) {
        state.userInfo = action.payload.userInfo;
        state.error = {};
        state.isLoggedIn = true;
      }
      if (action.payload.error) {
        state.error = action.payload.error;
        state.userInfo = {};
      }
      state.loading = false;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // Add user to the state array
      if (action.payload.userInfo) {
        state.userInfo = action.payload.userInfo;
        state.error = {};
        state.isLoggedIn = true;
      }
      if (action.payload.error) {
        state.error = action.payload.error;
        state.userInfo = {};
      }
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { logout } = LoginSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const isLoggedIn = (state) => state.login.isLoggedIn;
export const loginState = (state) => state.login;

export default LoginSlice.reducer;
