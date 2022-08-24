import Layout from "./layout";
import Products from "./pages/products";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import Register from "./pages/register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
