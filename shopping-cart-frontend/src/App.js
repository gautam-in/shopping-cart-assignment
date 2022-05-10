import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

import Home from "./screens/Home";
import Products from "./screens/Products";
import PreSignIn from "./screens/PreSignUp";
import MainLayout from "./screens/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/signin" exact element={<PreSignIn isLogin={true} />} />
          <Route
            path="/register"
            exact
            element={<PreSignIn isLogin={false} />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
