import { combineReducers } from 'redux';

// import reducers
import homePageReducer from '../pages/HomePage/reducers/homePageReducer';
import productListPageReducer from '../pages/ProductListPage/reducers/productListPageReducer';

const rootReducer = combineReducers({
    HomePage: homePageReducer,
    ProductListPage: productListPageReducer
});

export default rootReducer;
