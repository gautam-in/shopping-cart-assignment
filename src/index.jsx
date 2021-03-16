import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
