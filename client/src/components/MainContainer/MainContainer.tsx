import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Login from "../Login/Login";
import Register from "../Register/Register";

import styles from "./MainContainer.module.scss";

const MainContainer: any = () => {
  return (
    <section className={styles.main_container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route render={() => <div> Page Not Found</div>} />
      </Switch>
    </section>
  );
};

export default MainContainer;
