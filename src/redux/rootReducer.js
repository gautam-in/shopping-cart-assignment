import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";
import bannerReducer from "./banner/bannerReducer";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  getCatDetail: categoryReducer,
  getBanDetail: bannerReducer,
  getProdDetail: productReducer,
  getCartDetail: cartReducer,
  getAuthDetail: authReducer,
});

export default rootReducer;
