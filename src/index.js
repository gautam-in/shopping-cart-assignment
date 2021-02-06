import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootRouter from './web.route';
import { Provider } from 'react-redux';
import store from './flux/store/store';

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('root')
);
