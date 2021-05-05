import {combineReducers} from "redux";
import indexReducer from './index_reducer';

const rootReducer = combineReducers ({
    indexReducer : indexReducer,
});

export default rootReducer;