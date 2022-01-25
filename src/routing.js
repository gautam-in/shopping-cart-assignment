import React from "react";
import { Route, Switch } from 'react-router-dom';

import {HOME, SIGNIN, REGISTER, PRODUCTS, CART, PRODUCT_CATEGORY} from './utils/RouteNames';

import SignIn from "./components/pages/signin";
import Register from "./components/pages/register";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Cart from "./components/pages/cart";

const Routing = () => (
    <Switch>
        <Route exact path={HOME} component={Home}/>
        <Route path={SIGNIN} component={SignIn}/>
        <Route path={REGISTER} component={Register}/>
        <Route exact path={PRODUCTS} component={Products}/>
        <Route path={PRODUCT_CATEGORY} component={Products}/>
        <Route path={CART} component={Cart}/>
    </Switch>
);

export default Routing;