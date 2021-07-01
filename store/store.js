import { applyMiddleware, createStore } from 'redux';
import reduxthunk from 'redux-thunk';
 import reducer from './reducers';
// // import { createWrapper } from 'next-redux-wrapper';
// // import { HYDRATE } from 'next-redux-wrapper';


const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(reducer, bindMiddleware([reduxthunk]));

// const makeStore = (preloadState) => {
//   return createStore(reducers, preloadState, bindMiddleware([reduxthunk]));
// };
// const wrapper = createWrapper(makeStore,{debug:true})
// export default wrapper;
