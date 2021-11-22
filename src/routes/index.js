import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";

import CustomRoutes from "./CustomRoutes";

const Home = lazy(() => import("../containers/Home"));
const SignIn = lazy(() => import("../components/SignIn"))
const Register = lazy(() => import("../components/Register"))
const Products = lazy(() => import("../containers/Products"))

// eslint-disable-next-line
const params = {
  header: true,
  footer: true
}

export default () => (
  <>
    <Suspense fallback={<div> Loading... </div>}>
      <Switch>
          <CustomRoutes exact path="/" component={Home} {...params}/>
          <CustomRoutes exact path="/login" component={SignIn} {...params} />
          <CustomRoutes exact path="/home" component={Home} {...params} />
          <CustomRoutes exact path="/register" component={Register} {...params} />
          <CustomRoutes exact path="/products" component={Products} {...params} />
      </Switch>
    </Suspense>
  </>
);
