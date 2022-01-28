import React from "react";
import { Route, Switch } from 'react-router-dom';

import SignIn from "./components/pages/signin";
import Register from "./components/pages/register";
import ProtectedRoute from './protectedRoute';

import {
    HOME,
    SIGNIN,
    REGISTER,
    PRODUCTS,
    CART,
    PRODUCT_CATEGORY
} from './utils/RouteNames';

const HomePage = React.lazy(() => import('./components/pages/home'));
const ProductsList = React.lazy(() => import('./components/pages/products'));
const CartPage = React.lazy(() => import('./components/pages/cart'));

const Routing = () => (
    <Switch>
        <Route exact path={HOME} component={()=><HomePage />} />
        <Route path={SIGNIN} component={SignIn} />
        <Route path={REGISTER} component={Register} />
        <Route exact path={PRODUCTS} component={()=><ProductsList />} />
        <Route path={PRODUCT_CATEGORY} render={()=><ProductsList />} />
        <ProtectedRoute path={CART} component={CartPage} />
    </Switch>
);

export default Routing;