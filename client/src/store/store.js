import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./combineReducer";
import logger from "redux-logger";

const getStore = () => {
  try {
    const currentStore = JSON.parse(sessionStorage.getItem("store"));
    if (currentStore === null) {
      return undefined;
    }
    return currentStore;
  } catch (err) {}
};

const componseEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeData = getStore();
const store = createStore(
  rootReducer,
  storeData,
  componseEnhancers(applyMiddleware(thunk, logger))
);

const storeState = (state) => {
  sessionStorage.setItem("store", JSON.stringify(state));
};

store.subscribe(() => {
  storeState(store.getState());
});

export default store;
