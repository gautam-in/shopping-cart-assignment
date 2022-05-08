import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CART, HOME, LOGIN, PRODUCTS, REGISTER } from './constants/routes';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Product from './pages/product';
import Cart from './components/cart';

const Navigator = () => {
    return (
        <Switch>
            <Route path={HOME} exact component={Home} />
            <Route path={PRODUCTS} exact component={Product} />
            <Route path={CART} exact component={Cart} />
            <Route path={LOGIN} exact component={Login} />
            <Route path={REGISTER} exact component={Register} />
            <Route path="/" render={() => <Redirect to={HOME} />} />
        </Switch>
    );
};

export default Navigator;
