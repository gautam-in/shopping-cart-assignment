import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import locale from "./assets/locale.json";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";
import Products from "./pages/Products";
import Header from "./components/Header";
import { Login, Register } from "./pages/Auth";
import Footer from "./components/Footer";

import "./global.scss";
import ScrollToTop from "./components/Common/ScrollToTop";

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
        <Header {...headerLabels} />
        <main id="main">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/auth/signin" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer {...footerLabels} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
