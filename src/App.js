import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Suspense,lazy } from 'react';

const Login = lazy(()=>import('./components/Login'))
const Register = lazy(()=>import('./components/Register'))
const ProductList = lazy(()=>import('./components/ProductList'))
const Category = lazy(()=>import('./components/Category'))
const Cart = lazy(()=>import('./components/Cart'))


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Category/>
            </Suspense>
          </Route>

          <Route exact path="/products">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList/>
            </Suspense>
          </Route>
          
          <Route exact path="/cart">
            <Suspense fallback={<div>Loading...</div>}>
              <Cart/>
            </Suspense>
            </Route>
          <Route exact path="/login">
            <Suspense fallback={<div>Loading....</div>}>
              <Login/>
            </Suspense>
          </Route>
          <Route exact path="/register">
          <Suspense fallback={<div>Loading....</div>}>
              <Register />
          </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
