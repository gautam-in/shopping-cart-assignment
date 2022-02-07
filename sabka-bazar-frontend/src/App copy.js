import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products/Products";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/LoginPage/LoginPage";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/products/:id" component={Products} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
