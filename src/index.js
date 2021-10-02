import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import GlobalAppProvider from './Context/GlobalAppContext';

ReactDOM.render(
  <BrowserRouter>
    <GlobalAppProvider>
      <App />
    </GlobalAppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

