import { configureStore } from "@reduxjs/toolkit";

import cartSlice  from "./cart-slice";

const store = configureStore({
    reducer: { cartSlice },
  });

export default store