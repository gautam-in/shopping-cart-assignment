import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/templates/layout";
import Register from "./routes/register";
import Login from "./routes/login";
import { loadCategories } from "./routes/home/loader";
import { loadProducts } from "./routes/products/loader";

import "./scss/main.scss";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/",
        loader: () => loadCategories(),
        lazy: () => import("./routes/home"),
      },
      {
        path: "/products",
        loader: ({ params }) => loadProducts({ params }),
        lazy: () => import("./routes/products"),
      },
      {
        path: "/products/:category",
        loader: ({ params }) => loadProducts({ params }),
        lazy: () => import("./routes/products"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
