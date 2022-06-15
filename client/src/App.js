import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import CategoryProvider from "./Context/CategoryContextState";
import AddToCartProvider from "./Context/CartContextState";

function App() {
  return (
    <CategoryProvider>
      <AddToCartProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/product" component={Products} />
            <Route path="*" exact={true} component={Home} />
          </Switch>
        </Router>
      </AddToCartProvider>
    </CategoryProvider>
  );
}

export default App;
