import React from 'react';
import { map } from 'lodash';
import {
  BrowserRouter, Redirect, Switch,
} from 'react-router-dom';

import './assets/styles/styles.scss';

import routes from './routes';
import Layout from './components/Shared/Layout';
import { PrivateRoute, PublicRoute } from './components/Routing';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {
          map(routes, (r, i) => (r.isProtected === true
            ? <PrivateRoute key={i} {...r} />
            : <PublicRoute key={i} {...r} />
          ))
        }
        <Redirect from="*" to="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
