import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./../Home/home";
import Login from "../../components/Login/login";
import instance from "../../axios-instance";
import Register from "../../components/Register/Register";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";

const Main = () => {
  const [categories, setCats] = useState([]);

  const cart1 = useSelector((store) => store.cart);
  localStorage.setItem("cart", JSON.stringify(cart1));

  React.useEffect(() => {
    instance
      .get("/categories")
      .then((response) => {
        const { data } = response;
        const respData = data
          .filter((item) => item.enabled)
          .sort((a, b) => a.order - b.order);
        setCats(respData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="content">
      <div className="container">
        <Switch>
          <React.Fragment>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/products">
              <Products categories={categories} />
            </Route>
            <Route path="/cart" component={Cart} />

            <Route path="/home" exact>
              <Home categories={categories} />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </React.Fragment>
        </Switch>
      </div>
    </main>
  );
};

export default Main;
