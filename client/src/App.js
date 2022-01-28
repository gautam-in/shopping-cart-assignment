import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Login from './components/authentication/Login';

import logo from './resources/images/logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <Header />
        {/* <Route exact path="/login" component={Login} /> */}
      </div>
    </Router>
  );
}

export default App;
