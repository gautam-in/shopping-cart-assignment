import Home from "../pages/Home";
import Layout from "../layout/fullscreen";
import LogIn from "../pages/LogIn";
import SignIn from "../pages/SignUp";
import Cart from "../pages/Cart";
import ProductListing from "../pages/ProductListing";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: Layout,
  },
  {
    path: "/home",
    exact: true,
    component: Home,
    layout: Layout,
  },

  {
    path: "/Login",
    exact: true,
    component: LogIn,
    layout: Layout,
  },
  {
    path: "/Signup",
    exact: true,
    component: SignIn,
    layout: Layout,
  },
  {
    path: "/Cart",
    exact: true,
    component: Cart,
    layout: Layout,
  },
  {
    path: "/PLP",
    exact: true,
    component: ProductListing,
    layout: Layout,
  },
  {
    path: "/PLP/:id",
    exact: true,
    component: ProductListing,
    layout: Layout,
  },
];
