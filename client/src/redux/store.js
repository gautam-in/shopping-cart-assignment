import { createStore, applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const middlewares = [thunk];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
