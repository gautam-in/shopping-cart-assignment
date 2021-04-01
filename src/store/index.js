import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../reducers';
import configureMockStore from "redux-mock-store";
export default function configureStore(history, initialState) {
    const middlewares = [routerMiddleware(history), thunk];
    const finalCreateStore = compose(applyMiddleware(...middlewares))(createStore);
    const store = finalCreateStore(reducer, initialState);
    return store;
}
