import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/custom/AppFooter';
const Login = lazy(() => import('./pages/LoginPage'))
const Register = lazy(() => import('./pages/RegisterPage'))
const ProductList = lazy(() => import('./pages/ProductListPage'))
const Home = lazy(() => import('./pages/HomePage'))
const Cart = lazy(() => import('./pages/CartPage'))


function App() {
  return (
    <React.Fragment>
      <Router>
        <AppHeader />
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/category">
                <Home />
              </Route>
              <Route exact path="/products/:id">
                <ProductList />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
          </Suspense>
        </section>
        <AppFooter />
      </Router>
    </React.Fragment>
  );
}

export default App;
