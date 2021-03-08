import React from 'react';
import { map } from 'lodash';
import { BrowserRouter, Switch } from 'react-router-dom';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './routes';
import { PrivateRoute, PublicRoute } from './components/Routing';

const App = () => (
  <BrowserRouter>
    <Switch>
      {
        map(routes, (r, i) => (r.isProtected === true
          ? <PrivateRoute key={i} {...r} />
          : <PublicRoute key={i} {...r} />
        ))
      }
    </Switch>
  </BrowserRouter>
);

export default App;
