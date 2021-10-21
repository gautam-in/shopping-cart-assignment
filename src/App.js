import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

export default function App() {
  const ProductsPage = lazy(() => import('./Pages/Products/Products.js'));
  const SignInPage = lazy(() => import('./Pages/SignIn/Signin.js'));
  const SignUpPage = lazy(() => import('./Pages/SignUp/Signup.js'));
  const CartPage = lazy(() => import('./Pages/Cart/Cart.js'));

  return (
    <div className="App">
      <Header />
      <Suspense fallback='Loading...'>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/products' exact component={ProductsPage} />
          <Route path='/products/:id' exact component={ProductsPage} />
          <Route path='/signin' exact component={SignInPage} />
          <Route path='/register' exact component={SignUpPage} />
          <Route path='/cart' exact component={CartPage} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

