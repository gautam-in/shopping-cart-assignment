import React from 'react';
import { useSelector } from 'react-redux';
import { Switch,Route,Router} from 'react-router-dom';
import { createBrowserHistory} from 'history';
import Login from './Containers/Login';
import Signup from './Containers/Signup';
import Home from './Containers/Home';
import Header from './Containers/Header';
import Footer from './Containers/Footer';
import Product from './Containers/Products';
import Cart from './Containers/Cart';

function App() {
  
  const isLoggedIn = useSelector(state => state.User.isLogin);
  const history = createBrowserHistory();
    
  return (
    <>
      <Header/>
      {!isLoggedIn?
      (
        <Switch>
          <Route exact path="/register" component={Signup}/>
          <Route path="/" component={Login}/>
        </Switch>
      //</Router>
      ):
      (
        <Switch>
          <Route exact path="/products" component={Product}/>
          <Route exact path="/cart" component={Cart}/>
          <Route path="/" component={Home}/>
        </Switch>
      )}
      <Footer/>
    </>
  );
}

export default App;
