import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

import locale from "./assets/locale.json";

const Home = lazy(() => import("./pages/Home/index"));
const Login = lazy(() => import("./pages/Auth/Login/index"));
const Register = lazy(() => import("./pages/Auth/Register/index"));
const Products = lazy(() => import("./pages/Products/index"));
const PageNotFound = lazy(() => import("./pages/404/index"));

import Header from "./components/Header";
import Footer from "./components/Footer";

import ScrollToTop from "./components/Common/ScrollToTop";
import { CartContextProvider } from "./context/CartContext";

import "./global.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const {
    default: {
      application: { header: headerLabels, footer: footerLabels },
    },
  } = locale;
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <Header {...headerLabels} />
          <main id="main">
            <ScrollToTop />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/auth/signin" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />

                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer {...footerLabels} />
        </CartContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
