import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import NotFoundPage from './pages/notFoundPage'
import Header from './components/Header';
import Container from './layout/Container';
import { GlobalStyles } from './components/styles/globalStyles';
import CheckoutPage from './pages/checkoutPage';
import ProtectedRoute from './components/ProtectedRoutes';
import Footer from './components/Footer';

function App() {


  return (
    <Router>
      <div className="app">
        <GlobalStyles />
        <Header />

        <Container>
          <Switch>
            <ProtectedRoute exact path="/">
              <Redirect to="/home" />
            </ProtectedRoute>
            <ProtectedRoute path="/home" component={HomePage} />
            <ProtectedRoute exact path="/products" component={ProductsPage} />
            <ProtectedRoute path="/products/:catId" component={ProductsPage} />
            <ProtectedRoute path="/checkout" component={CheckoutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
