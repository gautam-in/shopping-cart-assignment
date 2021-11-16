import { createStore, combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    Products:productReducer,
    Category:categoryReducer,
    Cart:cartReducer,
    User:userReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default store;