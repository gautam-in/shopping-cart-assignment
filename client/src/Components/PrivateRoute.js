import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to={{ pathname: routes.signIn, state: { from: props.location } }} />
        )} />
    )
}