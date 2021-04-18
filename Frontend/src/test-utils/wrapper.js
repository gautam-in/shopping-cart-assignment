/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
// test-utils.js
import {render as rtlRender} from '@testing-library/react';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// Import your own reducer
import reducer from '../store/rootReducer';
// import store from "../store";
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
function render(
  ui,
  {
    initialState = {},
    store = createStore(reducer, compose(applyMiddleware(sagaMiddleware))),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({children}) {
    sagaMiddleware.run(rootSaga);
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from '@testing-library/react';
// override render method
export {render};
