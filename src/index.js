import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import rootReducer from './Redux/reducers';

const store = createStore(rootReducer);
const rootElement = document.getElementById("root");
const Component = () => <App />;
const Container = connect()(Component);

const Ecommerce = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);
ReactDOM.render(<Ecommerce />, rootElement);
