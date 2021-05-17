import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'))