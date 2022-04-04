import { lazy, Suspense } from "react";
import Layout from "./Components/Layout/Layout.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Signin = lazy(() => import("./Pages/Signin/Signin.component"));
const Home = lazy(() => import("./Pages/Home/Home.components"));
const Products = lazy(() => import("./Pages/Products/Products.component"));
const Register = lazy(() => import("./Pages/Register/Register.component"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:categoryId" element={<Products />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
