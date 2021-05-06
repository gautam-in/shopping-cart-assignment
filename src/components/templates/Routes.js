import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const Products = lazy(() => import('../pages/Products'));

const Routes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={Login} />
        <Route path='/register' exact component={Signup} />
        <Route path='/products' exact component={Products} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
