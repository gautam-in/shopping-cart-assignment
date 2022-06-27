import { legacy_createStore as createStore } from "redux";
import reducers from "../redux/reducers/root-reducer";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
