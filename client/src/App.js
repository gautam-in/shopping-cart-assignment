import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/home/homepage.component';
import ProductList from './pages/product-list/product-list.component';
import ProductItem from './pages/product-item/product-item.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App({ cartItems }) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/checkout"
          render={() =>
            cartItems.length > 0 ? (
              <CheckoutPage />
            ) : (
              <Redirect to="/products" />
            )
          }
        />
        <Route exact path="/products/:productId" component={ProductItem} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
      {window.location.pathname !== '/checkout' ? <Footer /> : null}
    </Router>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(App);
