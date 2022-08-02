import ProductListingPage from "./pages/ProductListingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default [
  { path: "/products", name: "Product", Component: ProductListingPage },
  {
    path: "/register",
    name: "Register",
    Component: Register,
  },
  { path: "/login", name: "Login", Component: Login },
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
];
