import './App.scss';
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProvider from './context/myProvider';

import Home from './containers/home';
import Cart from './containers/cart';
import ProductList from './containers/productList';
import Product from './containers/product';
import Footer from './components/footer';

function App() {
  return (
    <MyProvider>

      <Router>
        <Header />

        <section className="MainSection">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/categories/:id" component={ProductList} />
            <Route exact path="/products/:id" component={Product} />

          </Switch>
        </section>
        <Footer />
      </Router>
    </MyProvider>
  );
}

export default App;
