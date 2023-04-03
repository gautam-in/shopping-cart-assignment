import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home, { homePageLoader } from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import { productsPageLoader } from "./pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} loader={homePageLoader} />
      <Route
        path="/products"
        element={<Products />}
        loader={productsPageLoader}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
