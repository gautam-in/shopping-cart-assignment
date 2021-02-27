import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import constants from './constants';
export default () => {
    return (
        <Route path="/" component={App}>
            <IndexRoute
                getComponent={(location, cb) => {
                    require.ensure([], require => {
                        cb(null, require('./components/Home').default);
                    });
                }}
            />
            <Route
                path={'/Home'}
                getComponent={(location, cb) => {
                    require.ensure([], require => {
                        cb(null, require('./components/Home').default);
                    });
                }}
            />
            <Route
                path={'/signin'}
                getComponent={(location, cb) => {
                    require.ensure([], require => {
                        cb(null, require('./components/Signin').default);
                    });
                }}
            />
            <Route
                path={'/signup'}
                getComponent={(location, cb) => {
                    require.ensure([], require => {
                        cb(null, require('./components/Signup').default);
                    });
                }}
            />
            <Route
                // path={`${constants.api_point}/products`}
                path={`${"/products"}`}
                getComponent={(location, cb) => {
                    require.ensure([], require => {
                        cb(null, require('./components/Products').default);
                    });
                }}
            />
            <Route
                // path={`${constants.api_point}/products`}
                path={"/cart"}
                getComponent={(location, cb) => {
                    require.ensure([], require => {
                        cb(null, require('./components/Basket').default);
                    });
                }}
            />
        </Route>
    )
}