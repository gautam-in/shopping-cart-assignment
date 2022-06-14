import { Login, ProductView, Banner } from "./index";

const OpenRoutes = [
  {
    path: "/",
    component: Banner,
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
  {
    path: "/banner",
    component: Banner,
  },
];
export { OpenRoutes };
