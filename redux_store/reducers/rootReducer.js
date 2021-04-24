import { combineReducers } from 'redux';

// import reducers
import homePageReducer from '../pages/HomePage/reducers/homePageReducer';

const rootReducer = combineReducers({
    HomePage: homePageReducer,
});

export default rootReducer;
