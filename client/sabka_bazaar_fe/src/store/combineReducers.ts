import homeReducer from "modules/home/redux/reducers/reducer";
import loginReducer from "modules/login/redux/reducers/reducer";
import signUpReducer from "modules/register/redux/reducers/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
  home: homeReducer
});
