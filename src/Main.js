import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Test from "./Pages/Test";


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
    </Switch>
  </main>
);

export default Main;
