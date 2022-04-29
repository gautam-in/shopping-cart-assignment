import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import ROUTES from './shared/constants/routes';
import StorageService from './shared/services/storageService';
import { isEmpty } from './shared/Utils/utility';

const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const ProductListing = lazy(() => import('./components/ProductListing'));
const Register = lazy(() => import('./components/Register'));
const Header = lazy(() => import('./shared/components/Header'));



// checking user is authenticated or not
const Auth = () => {
  let location = useLocation();

  const userDetails = StorageService.getItem('userDetails');

  const isAuthenticated = !isEmpty(userDetails);
  if (isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}


const  App = () => {

  return (
    <Suspense fallback={null}>
      <Routes>
          <Route  path={ROUTES.home} element={<Header />}>
          - <Route index element={<Home />} />
            <Route element={<Auth />}>
                <Route path={ROUTES.register} element={<Register />} />
                <Route path={ROUTES.login} element={<Login />} />
              </Route>
            <Route path={ROUTES.products} element={<ProductListing />} />
          </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
