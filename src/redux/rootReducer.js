import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  category: categoryReducer
});

export default rootReducer;
