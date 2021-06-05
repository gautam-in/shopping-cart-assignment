import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './shared/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Suspense>
  </ErrorBoundary>,
  document.getElementById('root')
);

module.hot.accept();
