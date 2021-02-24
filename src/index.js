import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootRouter from './controller/web.route';
import { Provider } from 'react-redux';
import store from './redux/store/store';

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('root')
);
