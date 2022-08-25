import Layout from "./layout";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Products = lazy(() => import("./pages/products"));
const SignIn = lazy(() => import("./pages/sign-in"));
const Register = lazy(() => import("./pages/register"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="products"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="sign-in"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<div>Loading....</div>}>
              <Register />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
