import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import mainCartReducer from "./mainCartReducer";
import CheckScreenSizeReducer from "./checkScreenSizeReducer";

const reducers = combineReducers({
    cart: cartReducer,
    mainCart : mainCartReducer,
    size: CheckScreenSizeReducer
});

export default reducers;
