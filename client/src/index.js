import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './redux/configureStore';
import configureWebFontService from './common/WebFontService';

import './css/root.scss';
import './css/index.scss';

function AppInitializer() {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
}

const main = () => {
  AppInitializer();
  configureWebFontService();
};

try {
  main();
  // eslint-disable-next-line no-console
  console.info('App initialized');
} catch (err) {
  // eslint-disable-next-line no-console
  console.error('Unable to initialize app. See following error', err);
}
