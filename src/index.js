import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import configureStore from "./redux/store/configureStore"


const store = configureStore()
console.log(store.getState())

const ele = (
  <Provider store={store}>
    <App />

  </Provider>
)


ReactDOM.render(ele,document.getElementById('root'));


