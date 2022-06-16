import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter,Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Register/Signup';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductListingPage from './components/ProductListPage/ProductListingPage';
import Cart from './components/Cart/Cart';
import PrivateRoute from './components/Route/PrivateRoutes';
import PublicRoute from './components/Route/PublicRoutes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <Cart/>
        <Switch>
        <PrivateRoute exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signUp" component={SignUp} />
          <PrivateRoute path="/productListPage" component={ProductListingPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
