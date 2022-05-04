import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HOME, LOGIN, REGISTER } from './constants/routes';
import Login from './components/login';
import Register from './components/register';
// import Home from './pages/home';
// import Products from './components/products';

const Navigator = () => {
    return (
        <Switch>
            {/* <Route path={HOME} exact component={Home} />
                <Route path={PRODUCTS} exact component={Products} /> */}
            <Route path={LOGIN} exact component={Login} />
            <Route path={REGISTER} exact component={Register} />
            <Route path="/" render={() => <Redirect to={HOME} />} />
        </Switch>
    );
};

export default Navigator;
