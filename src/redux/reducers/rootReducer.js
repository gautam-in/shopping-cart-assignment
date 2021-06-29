import { combineReducers } from "redux";

import bannerListReducer from "./bannerListReducer";
import cartReducer from "./cartReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";

const rootReducer = combineReducers({
  banner: bannerListReducer,
  cart: cartReducer,
  category: categoryListReducer,
  product: productListReducer,
});

export default rootReducer;
