import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import Header from "components/Header/Header";
import Copyright from "components/Shared/Copyright";
import Login from "pages/Login";
import Register from "pages/Register";
import Home from "pages/Home";
import NotFound from "components/Shared/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
        <Copyright />
      </Router>
    </Provider>
  );
}

export default App;
