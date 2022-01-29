import React from 'react';
import {BrowserRouter as Router, Routes, Route, Switch, Link} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/authentication/Login';
import './components/authentication/Login.scss';

import logo from './resources/images/logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
         <Route exact path="/login" component={Login} element={<Login />}/>
         {/* <Route exact path="/register" component={Register} element={<Register />}/> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
