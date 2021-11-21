import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Home from "./modules/Home";
import Product from "./modules/Product";
import Login from "./modules/Login";
import MainLayout from "./modules/MainLayout";
import Register from "./modules/Register";
import reducer from "./store/reducer";

function App() {
  const store = createStore(reducer, composeWithDevTools());
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Product} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" render={() => <Redirect to="/" />} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
