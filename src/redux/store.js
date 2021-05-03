import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage
};

const store = createStore(
  persistReducer(persistConfig, reducer),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
