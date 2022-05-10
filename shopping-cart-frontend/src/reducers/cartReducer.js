import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      let data = createCartData(action.payload, state.cartItems);
      return {
        ...state,
        cartItems: [...data],
        cartCount: state.cartCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    },
    removeItemFromCart: (state, action) => {
      let data = removeCartItem(action.payload, state.cartItems);
      return {
        ...state,
        cartItems: [...data],
        cartCount: state.cartCount - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    },
    resetCart: (state) => {
      return {
        ...state,
        cartItems: [],
        cartCount: 0,
        totalPrice: 0,
      };
    },
  },
});

const createCartData = (item, prevData) => {
  let index = prevData.findIndex((e) => e.id === item.id);
  if (index > -1) {
    let data = [...prevData];
    data[index] = {
      ...data[index],
      quantity: data[index]?.quantity + 1,
    };
    return [...data];
  }
  return [...prevData, { ...item, quantity: 1 }];
};

const removeCartItem = (item, prevData) => {
  let index = prevData.findIndex((e) => e.id === item.id);
  if (prevData[index]?.quantity > 1) {
    let data = [...prevData];
    data[index] = {
      ...data[index],
      quantity: data[index]?.quantity - 1,
    };
    return [...data];
  } else {
    let data = [...prevData];
    data.splice(index, 1);
    return [...data];
  }
};

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
