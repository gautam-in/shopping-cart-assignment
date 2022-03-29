import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Login from "./components/Login/Login.component";
import Register from "./components/Register/Register.component";
import store from "./redux/store/store";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Product} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
