import { combineReducers } from "redux";

import bannerListReducer from "./bannerListReducer";
import cartReducer from "./cartReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  banner: bannerListReducer,
  cart: cartReducer,
  category: categoryListReducer,
  product: productListReducer,
  user: userReducer,
});

export default rootReducer;
