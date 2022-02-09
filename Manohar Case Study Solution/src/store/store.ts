import { applyMiddleware, createStore } from "redux";
import { IStore } from "../model/IStore";
import reducers from "../reducers/rootReducer";
import thunk from "redux-thunk";

let defaultStore:IStore = {
    cart: [],
    mainCart: []
}

const store = createStore(reducers,{},applyMiddleware(thunk));
export default store;