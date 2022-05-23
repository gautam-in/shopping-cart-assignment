import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter,Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Register/Signup';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductListingPage from './components/ProductListPage/ProductListingPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>

        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/productListPage" component={ProductListingPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
