import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import WEB_PATH from '../../routes/webPath';

const isAuth = true;

export default React.memo(({ component: Component, specialPass, ...rest }) => (!isAuth
  ? <Redirect to={WEB_PATH.LOGIN} />
  : <Route {...rest} render={(props) => <Component {...rest} {...props} />} />));
