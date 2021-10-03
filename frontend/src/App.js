
import Home from './containers/Home';
import Product from './containers/Product';
import Cart from './containers/Cart';
import Modal from 'react-modal';
import Signup from './containers/Authentication/Signup';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

Modal.setAppElement('#root');
function App() {
  return (
      <Router>
        <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/product' component={Product}></Route>
              <Route exact path='/cart' component={Cart}></Route>
              <Route exact path='/register' component={Signup}></Route>
            </Switch>
      </Router>
  );
}

export default App;
