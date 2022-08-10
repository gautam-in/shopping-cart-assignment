import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
// import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Navigation from './components/Navigation/Navigation';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';


function App() {
  return (
    <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/add" component={AddEmployee} exact /> */}
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={Products} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/signup" component={Signup} exact />
        </Switch>
    </div>
  );
}

export default App;
