import { Login, ProductView, Banner, SignUp } from "./index";

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
    path: "/signup",
    component: SignUp,
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
