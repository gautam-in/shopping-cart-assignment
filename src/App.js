import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import Product from "./screens/Product";
import Login from "./screens/Login";
import MainLayout from "./screens/MainLayout";
import Register from "./screens/Register";
import store from "./store/store";

import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Product} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" render={() => <Redirect to="/" />} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
