import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../container/Home/Home';
import Signin from '../components/SignIn/Signin';
import Products from '../components/Products/Products.jsx';
import Register from '../components/Register/Register';

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        path="/signin"
                        component={Signin}
                    />
                    <Route
                       exact path="/products"
                        component={Products}
                    />
                    <Route
                        path="/register"
                        component={Register}
                    />
                    <Route
                        path="/products/:id"
                        component={Products}
                    />
                </Switch>
            </Router>
        )
    }
}

export default Routing;