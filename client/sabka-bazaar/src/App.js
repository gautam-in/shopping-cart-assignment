import './App.css';
import Login from './pages/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/home';
import Product from './pages/products/product';
import Cart from './pages/cart/cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Login />
          </Route>
          <Route path="/products">
            <Product/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div >
  );
}

export default App;
