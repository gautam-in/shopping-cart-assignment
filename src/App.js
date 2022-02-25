import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import Product from "./screens/Product";
import Login from "./screens/Login";
import Main from "./screens/Main";
import Register from "./screens/Register";
import store from "./store/store";

import "./app.style.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Product} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" render={() => <Redirect to="/" />} />
          </Switch>
        </Main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
