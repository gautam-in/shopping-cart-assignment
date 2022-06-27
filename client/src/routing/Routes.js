import React from "react"
import { Switch } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Products from "../pages/ProductListing/ProductListing"
import Layout from "../components/Layout/Layout"
import Cart from "../components/Cart/Cart"
import RouteLayout from "./RouteLayout"



const Routes = () => {

    const routeList = [
        {
            path: "/",
            component: Home,
            layout: Layout

        },
        {
            path: "/home",
            component: Home,
            layout: Layout
        },
        {
            path: "/login",
            component: Login,
            layout: Layout
        },
        {
            path: "/register",
            component: Register,
            layout: Layout
        },
        {
            path: "/productlist",
            component: Products,
            layout: Layout
        },
        {
            path: "/cart",
            component: Cart,
            layout: Layout
        },

        {
            path: "*",
            component: Home,
            layout: Layout
        },

    ]

    console.log('inside routes file')
    return (
        
            <Switch>
                {routeList.map((route, index) => {
                    return (
                        <RouteLayout
                            key={index}
                            path={route.path}
                            component={route.component}
                            layout={route.layout}
                            exact
                        >

                        </RouteLayout>
                    )



                })}
            </Switch>
      
    )

}

export default Routes