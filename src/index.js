import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from './store';

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('app')
);

module.hot.accept();
