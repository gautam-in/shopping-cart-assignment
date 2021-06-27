import { combineReducers } from "redux";
import bannerListReducer from "./bannerListReducer";
import categoryListReducer from "./categoryListReducer";

const rootReducer = combineReducers({
  banner: bannerListReducer,
  category: categoryListReducer,
});

export default rootReducer;
