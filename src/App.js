import {BrowserRouter, Route,Switch} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader';
import { Suspense } from 'react';
const Login = React.lazy(() => import('./components/LogIn/Login'));
const Products = React.lazy(() => import('./components/Products/Products'));
const Cart = React.lazy(() => import('./components/Cart/Cart'));
const Register = React.lazy(() => import('./components/Register/Register'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact render={() => <Login/>} />
          <Route path='/register' exact render={() => <Register/>} />
          <Route path='/cart' exact component={() => <Cart/>} />
          <Route path='/products' exact render={() => <Products/>} />
          <Route path='/products/:id' exact component={Products} />
        </Switch>
      </Suspense>
      <Footer/>
    </BrowserRouter>

    
  );
}

export default App;
