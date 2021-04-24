import { combineReducers } from 'redux';

// import reducers
import counterReducer from './counterReducer';
import homePageReducer from '../pages/Home/reducers/homePageReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    HomePage: homePageReducer,
});

export default rootReducer;