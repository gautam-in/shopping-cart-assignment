import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import WEB_PATH from '../../routes/webPath';

export default React.memo(({ component: Component, specialPass, ...rest }) => {
  const isAuth = true;
  return !isAuth
    ? <Redirect to={WEB_PATH.LOGIN} />
    : <Route {...rest} render={(props) => <Component {...rest} {...props} />} />;
});
