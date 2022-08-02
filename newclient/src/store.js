import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import cartadddeleteitem from "./reducer/CartAddDeleteItem.js";
import cardmodalstate from "./reducer/CardModalState.js";
const store = configureStore({
  reducer: {
    cartadddeleteitem,
    cardmodalstate,
  },
});
export default store;
