import React from "react";

import { Home, Products, Register, SignIn } from "../pages";

export type Route = Readonly<{
  path: string;
  name: string;
  Component: React.FC;
}>;

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/products",
    name: "Products",
    Component: Products,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    Component: SignIn,
  },
  {
    path: "/register",
    name: "Register",
    Component: Register,
  },
];
