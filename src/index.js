import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';

import Layout from './components/organisms/Layout';
import store from './redux/store';

render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout />
    </Provider>
  </BrowserRouter>,

  document.getElementById('app')
);

module.hot.accept();
