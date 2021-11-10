import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import { HelmetProvider } from 'react-helmet-async';
import AuthContextProvider from './contexts/AuthContext';
import CartContextProvider from './contexts/CartContext';
import CategoryContextProvider from './contexts/CategoryContext';

ReactDOM.render(
  <HelmetProvider>
    <AuthContextProvider>
      <CartContextProvider>
        <CategoryContextProvider>
          <Routes />
        </CategoryContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
