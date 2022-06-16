import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAPI from "../../api/axiosAPI";

export const getCartData = createAsyncThunk("cart/getCartData", async () => {
  if (sessionStorage.getItem("userInfo")) {
    if (sessionStorage.getItem("cartItems")) {
      sessionStorage.removeItem("cartItems");
    }
    const response = await axiosAPI.cart.get();
    return response.data;
  } else {
    if (sessionStorage.getItem("cartItems")) {
      const cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
      return cartItems;
    }
  }
});
const initialState = {
  cartItems: [],
};

export const addToCartData = createAsyncThunk(
  "cart/addToCartData",
  async (data, { rejectWithValue }) => {
    const product = await axiosAPI.products.getById(data.id);
    const payload = {
      id: product.data.id,
      name: product.data.name,
      imageURL: product.data.imageURL,
      price: product.data.price,
      countInStock: product.data.stock,
      qty: data.qty,
    };
    try {
      if (!sessionStorage.getItem("userInfo") && product) {
        let cartItems;
        if (sessionStorage.getItem("cartItems")) {
          cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
        } else {
          cartItems = [];
        }
        const existed = cartItems.find((item) => {
          return item.id === data.id;
        });
        if (existed) {
          existed.qty = existed.qty + 1;
          const items = cartItems.map((item) => {
            return item.id === data.id ? existed : item;
          });
          cartItems = items;
        } else {
          cartItems.push(payload);
        }

        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        return cartItems;
      }

      let exists = undefined;
      try {
        exists = await axiosAPI.cart.getById(data.id);
      } catch (error) {}
      if (exists) {
        payload.qty = exists.data.qty + 1;
        await axiosAPI.cart.put(data.id, payload);
      } else {
        await axiosAPI.cart.post(payload);
      }
      const response = await axiosAPI.cart.get();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeCartData = createAsyncThunk(
  "cart/removeCartData",
  async (data, { rejectWithValue }) => {
    try {
      if (!sessionStorage.getItem("userInfo")) {
        let cartItems;
        if (sessionStorage.getItem("cartItems")) {
          cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
        } else {
          cartItems = [];
        }
        const existed = cartItems.find((item) => {
          return item.id === data.id;
        });
        if (existed.qty > 1) {
          existed.qty = existed.qty - 1;
          const items = cartItems.map((item) => {
            return item.id === data.id ? existed : item;
          });
          cartItems = items;
        } else {
          const items = cartItems.filter((item) => {
            return item.id !== data.id;
          });
          if (items) {
            cartItems = items;
          } else {
            cartItems = [];
          }
        }

        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        return cartItems;
      }

      let exists = undefined;
      try {
        exists = await axiosAPI.cart.getById(data.id);
      } catch (error) {}
      if (exists) {
        if (exists.data.qty > 1) {
          const payload = {
            id: exists.data.id,
            name: exists.data.name,
            imageURL: exists.data.imageURL,
            price: exists.data.price,
            countInStock: exists.data.stock,
            qty: exists.data.qty - 1,
          };
          await axiosAPI.cart.put(data.id, payload);
        } else {
          await axiosAPI.cart.delete(data.id);
        }
      }
      const response = await axiosAPI.cart.get();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCartData.fulfilled, (state, action) => {
      // Add user to the state array
      state.cartItems = action.payload;
    });
    builder.addCase(addToCartData.fulfilled, (state, action) => {
      // Add user to the state array
      state.cartItems = action.payload;
    });
    builder.addCase(addToCartData.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(addToCartData.rejected, (state, action) => {
      // Add user to the state array
      //   state.error = error;
      state.loading = false;
    });
    builder.addCase(removeCartData.fulfilled, (state, action) => {
      // Add user to the state array
      state.cartItems = action.payload;
    });
    builder.addCase(removeCartData.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(removeCartData.rejected, (state, action) => {
      // Add user to the state array
      //   state.error = error;
      state.loading = false;
    });
  },
});

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.cartItems;
export const count = (state) => state.cart.cartItems?.length;
export const totalPrice = (state) => {
  return state.cart.cartItems?.reduce((total, item) => {
    return total + item.qty * item.price;
  }, 0);
};
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
