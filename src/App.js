import "./App.css";
import Products from "./components/products";
import Home from "./components/home";
import Login from "./components/login";
import { Route, Switch, useHistory } from "react-router-dom";
import Register from "./components/register";

function App(_props) {
  let history = useHistory();
  return (
    <Switch>
      <Route path={"/products"}>
        <Products history={history} />
      </Route>
      <Route path="/login">
        <Login history={history} />
      </Route>
      <Route path="/register">
        <Register history={history} />
      </Route>
      <Route index>
        <Home history={history} />
      </Route>
    </Switch>
  );
}

export default App;
