import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import NotFoundPage from './pages/notFoundPage'
import Header from './components/Header';
import Container from './layout/Container';
import Category from './components/Category';
import { GlobalStyles } from './components/styles/globalStyles';
import { CartContext } from './store/cart-context';
import { useEffect, useContext } from 'react'
import Cart from './components/Cart';
import { ModalContext } from './store/modal-context';
import ReactDOM from 'react-dom';
import CheckoutPage from './pages/checkoutPage';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  const ctx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);
  useEffect(() => {
    if (!!localStorage.getItem('items')) {
      const storedCart = JSON.parse(localStorage.getItem('items'));
      // console.log("entered");
      ctx.items = storedCart;
    }
  }, [ctx])
  return (
    <Router>
      <div className="app">
        <GlobalStyles />
        <Header />
        {modalCtx.cartIsShown && ReactDOM.createPortal(<Cart />, document.getElementById('overlays'))}
        <Container>
          <Switch>
            <ProtectedRoute exact path="/">
              <Redirect to="/home" />
            </ProtectedRoute>
            <ProtectedRoute path="/home" component={HomePage} />
            <ProtectedRoute exact path="/products" component={ProductsPage} />
            <ProtectedRoute path="/products/:catId" component={Category} />
            <ProtectedRoute path="/checkout" component={CheckoutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
