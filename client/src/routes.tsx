import { Layout } from "components";
import { Home, Login, Products, Register } from "pages";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/signin",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  }
]