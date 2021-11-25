import { combineReducers } from "redux";

import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import bannerReducer from "./bannerReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

export const mainReducer = combineReducers({
    product : productReducer,
    category : categoryReducer,
    banner : bannerReducer,
    users : usersReducer,
    auth : authReducer
})