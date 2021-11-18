import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import AppReducer, { IAppState } from "./AppReducer";

export interface IState {
    appState: IAppState;
}

const rootReducer = combineReducers<IState>({
    appState: AppReducer,
});

const Store = createStore(rootReducer, composeWithDevTools());

export default Store;
