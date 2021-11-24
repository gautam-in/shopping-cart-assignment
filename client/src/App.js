import { Login } from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";
import { Home } from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";
import { ProtectedRoutes } from "./Components/ProtectedRoutes";
import { PageNotFound } from "./Pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<ProtectedRoutes />}>
          <Route exact path="/home" element={<Home />} />
        </Route>
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
