import './App.scss';
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProvider from './context/myProvider';

import Home from './containers/home';
import Cart from './containers/cart';
import ProductList from './containers/home/productList';
import Product from './containers/product';

function App() {
  return (
    <MyProvider>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:id" component={Product} />

        </Switch>
        {/* <Footer/> */}
      </Router>
    </MyProvider>
  );
}

export default App;
