import React from "react";
import { Route } from "react-router-dom";
import Home from "./container/Home/home";

const routes = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
    </React.Fragment>
  );
};

export default routes;
