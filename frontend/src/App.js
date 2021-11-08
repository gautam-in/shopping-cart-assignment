import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          {/* <Route path="/products/:id" component={Products} /> */}
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
