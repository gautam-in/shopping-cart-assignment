import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
