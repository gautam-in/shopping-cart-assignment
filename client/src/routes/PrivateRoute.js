import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../store/Auth/Context';
import { ROUTES } from '../constants';

function PrivateRoute({ component: Component, ...rest }) {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <Route
      {...rest}
      render={(props) => (!isAuthenticated ? (
        <Redirect to={ROUTES.LOGIN} />
      ) : (
        <Component {...props} />
      ))}
    />
  );
}

export default PrivateRoute;
