import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Register from "./routes/register";
import Login from "./routes/login";
import Home from "./routes/home";
import Products, { productsLoader } from "./routes/products";

import "./scss/main.scss";

const router = createBrowserRouter([
  {
    element: (
      <div className="root pink-theme">
        <Outlet />
      </div>
    ),
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/", element: <Home /> },
      {
        path: "/products",
        loader: productsLoader,
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
