import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createRootReducer from '../reducers';

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]; // Can add more middlewares like redux-persist 
const configureStore = () => {
  const store = createStore(
    createRootReducer(),
    composeEnhancers(
      applyMiddleware(
        ...middlewares
      )
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
