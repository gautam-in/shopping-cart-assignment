import React from 'react'
import { Switch } from 'react-router-dom'
import ProductsList from '../pages/ProductsList'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import RouteWithLayout from './RouteWithLayout'
import Layout from '../pages/Layout/Layout'

function Routes() {

  const routes = [
    {
      path: "/",
      component: Home,
      layout: Layout,
    },
    {
      path: "/login",
      component: Login,
      layout: Layout,
    },
    {
      path: "/signup",
      component: Signup,
      layout: Layout,
    },
    {
      path: "/products",
      component: ProductsList,
      layout: Layout,
    },
    {
      path: "*",
      component: Home,
      layout: Layout,
    },
  ]

  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <RouteWithLayout
            key={index}
            path={route.path}
            component={route.component}
            layout={route.layout}
            exact
          >
          </RouteWithLayout>
        )
      })}
    </Switch>
  )
}

export default Routes
