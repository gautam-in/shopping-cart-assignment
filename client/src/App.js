import {
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/products" component={Products}  />
      </Switch>
    </>
  );
}

export default App;
