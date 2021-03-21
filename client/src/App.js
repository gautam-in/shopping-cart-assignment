import React from "react";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={routes.signIn} component={Login} />
        <Route exact path={routes.register} component={Register} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
