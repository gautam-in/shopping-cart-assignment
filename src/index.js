import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App.js";
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app"));
