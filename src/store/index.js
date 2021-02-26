import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from '../reducers';

export default function configureStore(history, initialState) {
    const middlewares = [routerMiddleware(history), thunk];
    // const middlewares = [routerMiddleware(history), thunk];
    let finalCreateStore;
    // if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
        finalCreateStore = compose(applyMiddleware(...middlewares))(createStore);
    // } else {
    //     finalCreateStore = applyMiddleware(...middlewares)(createStore);
    // }
    const store = finalCreateStore(reducer, initialState);
    return store;
}
