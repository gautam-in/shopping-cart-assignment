import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from '../reducer/rootReducer'
// create a simple reducer


const makeStore = (initialState, options) => {
    return createStore(reducer, applyMiddleware(thunk));
};

export default makeStore;