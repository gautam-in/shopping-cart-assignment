import {DEFAULT_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTER_ROUTE, HOME, CART } from './constants'

import { Login } from '../components/Login'
import { Products } from '../components/Products'
import { Register } from '../components/Register'
import { Home } from '../components/Home'
import { Cart } from '../components/Cart'

const routeConfig = {
    secureDefaultRoute: DEFAULT_ROUTE,
    routes: [
        {
            path: DEFAULT_ROUTE,
            component: Home,
            exact: true,
            name: 'Home',
        },
        {
            path: LOGIN_ROUTE,
            component: Login,
            exact: true,
            name: 'login',
        },
        {
            path: REGISTER_ROUTE,
            component: Register,
            exact: true,
            name: 'Register',
        },
        {
            path: PRODUCT_ROUTE,
            component: Products,
            exact: true,
            name: 'Products',
        },
        {
            path: HOME,
            component: Home,
            exact: true,
            name: 'Home',
        },
        {
            path: CART,
            component: Cart,
            exact: true,
            name: 'Cart',
        },
    ]
}

export default routeConfig