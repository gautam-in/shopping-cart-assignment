import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, ReduxPersistProvider } from './store';
import { Provider } from 'react-redux';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ReduxPersistProvider>
      <App />
    </ReduxPersistProvider>
  </Provider>
);