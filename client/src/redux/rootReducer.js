import { combineReducers } from 'redux';

import homeReducer from './Home/reducer';

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;