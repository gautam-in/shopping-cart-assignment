import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Home'));
const SingnupPage = lazy(() => import('../../pages/Signup'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ProductsPage = lazy(() => import('../../pages/Products'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/signup' exact component={SingnupPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/products' exact component={ProductsPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
