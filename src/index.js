import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './stores/_helpers';
import  App from "./App";
import { configureFakeBackend } from './stores/_helpers';
configureFakeBackend();
console.log('index.js ------ ', store)

ReactDOM.render(<Provider store={store}>  <App store={store} /> </Provider>, document.getElementById("root"));



