import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./routes/register";
import Login from "./routes/login";
import Home from "./routes/home";
import Products, { productsLoader } from "./routes/products";

import "./index.scss";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  {
    path: "/products",
    loader: productsLoader,
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
