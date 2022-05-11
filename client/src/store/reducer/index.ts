import { combineReducers } from "redux";
import user from "./user.reducer";

const reducers = combineReducers({
    user: user
})

export default reducers;