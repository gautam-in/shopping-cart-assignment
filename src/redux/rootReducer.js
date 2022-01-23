import { combineReducers } from "redux";
import authReducer from "./authenticate/authReducer";
import bannerReducer from "./banner/bannerReducer";
import categoryReducer from "./category/categoryReducer";
import cartReducer from "./cart/cartReducer";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
  getAuthenticateDetails: authReducer,
  getBannerDetails: bannerReducer,
  getCategoryDetails: categoryReducer,
  getCartDetails: cartReducer,
  getProductDetails: productReducer,
});

export default rootReducer;