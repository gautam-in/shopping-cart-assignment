import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductContainer from "./components/Products/ProductContainer";
import NavbarHeader from "./components/navbar/Navbar";

function App() {

  return (
    <div>
      <NavbarHeader />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path='/products' element={<ProductContainer />} />
      </Routes>
    </div>
  );
}

export default App;
