import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
    key: "root",
    storage: storageSession,
    blackList: []
  };
  


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store);

export default {
    store,
    persistor
  };
  
