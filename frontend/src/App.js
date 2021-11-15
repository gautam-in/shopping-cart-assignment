import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home';
import Products from './pages/Produts';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="page-container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/products/:id" component={Products}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
        </div>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
