import {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Home'));
const SingnupPage = lazy(() => import('../../pages/Signup'));
const LoginPage = lazy(() => import('../../pages/Login'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SingnupPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
