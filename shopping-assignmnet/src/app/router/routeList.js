import { Login, App, ProductView } from "./index";

const OpenRoutes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/product",
    component: ProductView,
  },
  {
    path: "/product/:id",
    component: ProductView,
  },
];
export { OpenRoutes };
