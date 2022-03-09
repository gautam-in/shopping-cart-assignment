import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <header className='App'>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Products' component={Products} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />

      </Switch>
      <Footer />
      </BrowserRouter>

    </header>

  );
}

export default App;
