import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { rootReducer } from './reducers';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnchancer(applyMiddleware(thunk)))




const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}><App tab="home" /></Provider>);

