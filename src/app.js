import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./navbar/navigation.component";
import Footer from "./footer/footer.module";
import "./app.scss";
import Errorboundary from "./Error/Error-boundary.component";
import NotFound from "./NotFound/NotFound.component";

const Register = lazy(() => import("./register/register.component"));
const Home = lazy(() => import("./home/home.component"));
const Products = lazy(() => import("./products/products.component"));
const Cart = lazy(() => import("./cart/cart.component"));
const Checkout = lazy(() => import("./checkout/checkout.component"));

const routes = [
  { path: "/login", element: <Register isFrom="login" /> },
  { path: "/register", element: <Register /> },
  { path: "/products/:type", element: <Products /> },
  { path: "/products", element: <Products /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/cart-items", element: <Cart /> },
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <Errorboundary>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Router>
          <Navigation />
          <Routes>
            {routes.map((route) => (
              <Route
                exact
                path={route.path}
                element={route.element}
                key={`key=${route.path}`}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </Errorboundary>
  );
}

export default App;
