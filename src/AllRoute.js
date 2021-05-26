import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "components/Header/Header";
import Copyright from "components/Shared/Copyright";
import Login from "pages/Login";
import Register from "pages/Register";
import Home from "pages/Home";
import Product from "pages/Product";
import Cart from "components/Cart/Cart";
import NotFound from "components/Shared/NotFound";

function AllRoute() {
  const { isCartShow } = useSelector((state) => state.product);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Copyright />
      {isCartShow && <Cart />}
    </Router>
  );
}

export default AllRoute;
