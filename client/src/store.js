<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import reducer from "./Redux/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
=======
import { createStore, applyMiddleware } from "redux";
import reducer from "./Redux/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
>>>>>>> 5c61fa810bfdac7324f5508c516b2d7a14df4d81
