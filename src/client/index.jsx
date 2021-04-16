/* eslint-disable no-underscore-dangle */
// Startup point for the client side application
import 'babel-polyfill';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import Routes from './Routes';
import storeConfig from './redux/storeConfig';
import { insertCss } from './utils/common';

const store = storeConfig(window.INITIAL_STATE);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <StyleContext.Provider value={{ insertCss }}>
        {renderRoutes(Routes)}
      </StyleContext.Provider>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
