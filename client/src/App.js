import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import SigIn from './components/signin'
import Home from "./components/home";
import Register from './components/Register'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={Products}/>
            <Route exact path="/signin" component={SigIn} />
            <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
