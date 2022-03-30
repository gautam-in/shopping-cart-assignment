import { lazy } from "react";

import { paths } from "./constants";

const { home, products, productsFilter, register, login } = paths;

export const routes = {
  home: {
    path: home,
    component: lazy(() => import("../pages/home/home.jsx")),
    exact: true,
    private: true,
  },
  products: {
    path: products,
    component: lazy(() => import("../pages/products/products.jsx")),
    exact: true,
    private: true,
  },
  productsFilter: {
    path: productsFilter,
    component: lazy(() => import("../pages/products/products.jsx")),
    exact: true,
    private: true,
  },
  register: {
    path: register,
    component: lazy(() => import("../pages/register/register.jsx")),
    exact: true,
    private: false,
  },
  login: {
    path: login,
    component: lazy(() => import("../pages/login/login.jsx")),
    exact: true,
    private: false,
  },
};

export const routeList = Object.entries(routes);
