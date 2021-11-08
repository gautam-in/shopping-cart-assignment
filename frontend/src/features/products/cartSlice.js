import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0, // total no of products
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // getting the index of the product
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );

      // if the product is already present
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        // if the product is not present create the item with cartQuantity and push
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct); // pushing the item to cart
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    setShowCart: (state, { payload }) => {
      // console.log(payload);
      return {
        ...state,
        showCart: payload || !state.showCart,
      };
    },

    removeFromCart: (state, { payload }) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload.id
      );

      state.cartItems = nextCartItems;
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart: (state, { payload }) => {
      const currentCartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === payload.id
      );
      console.log(currentCartItemIndex);

      if (state.cartItems[currentCartItemIndex].cartQuantity > 1) {
        // decrease the quantity
        state.cartItems[currentCartItemIndex].cartQuantity -= 1;
      } else {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        );

        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    getTotal: (state, { payload }) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          // got the price and quantity of current item one by one
          const { price, cartQuantity } = cartItem;

          // calculate total amount for current item
          const itemTotal = price * cartQuantity;

          //
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  setShowCart,
  removeFromCart,
  decreaseCart,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
