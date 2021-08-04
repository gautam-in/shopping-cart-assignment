import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { Suspense, lazy, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/custom/AppFooter';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from './redux/actions';
const Register = lazy(() => import('./pages/RegisterPage'))
const ProductList = lazy(() => import('./pages/ProductListPage'))
const Home = lazy(() => import('./pages/HomePage'))
const Cart = lazy(() => import('./pages/CartPage'))
const Login = lazy(() => import('./pages/LoginPage'))


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem('auth-token')) {
      dispatch(setAuthenticated(true))
    }
  }, [])

  return (
    <React.Fragment>
      <Router>
        <AppHeader />
        <section style={{ margin: 10 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/category">
                <Home />
              </Route>
              <Route exact path="/products/:id">
                <ProductList />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
            <Cart />
          </Suspense>
        </section>
        <AppFooter />
      </Router>
    </React.Fragment>
  );
}

export default App;
