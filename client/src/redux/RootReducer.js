import { combineReducers } from "redux";
import BannerReducer from "../components/Banner/BannerReducer";
import LoginReducer from "../components/Login/LoginReducer";
import ProductReducer from "../components/Products/ProductReducer";

const appReducer = combineReducers({
  login: LoginReducer,
  product: ProductReducer,
  banner: BannerReducer,
});

export default appReducer;
