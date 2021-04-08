import { combineReducers } from "redux";
import BannerReducer from "../components/Banner/BannerReducer";
import LoginReducer from "../containers/Login/LoginReducer";
import ProductReducer from "../containers/Products/ProductReducer";

const appReducer = combineReducers({
  login: LoginReducer,
  product: ProductReducer,
  banner: BannerReducer,
});

export default appReducer;
