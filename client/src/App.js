import { Login } from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";
import { Home } from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route exact path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
