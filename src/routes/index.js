import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Store from '../pages/store';
import Home from '../pages/home';
import NotFound from '../pages/NotFound';
import Cart from '../pages/cart';
import Register from '../pages/register';
import SignIn from '../pages/signin';

import '../styles/global.scss';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/store" component={Store} /> 
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;