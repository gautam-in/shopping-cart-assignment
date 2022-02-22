import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductContainer from "./components/Products/ProductContainer";
import NavbarHeader from "./components/navbar/Navbar";
import LogIn from "./components/SignInAndRegister/LogIn";
import Register from "./components/SignInAndRegister/Register";

function App() {

  return (
    <div>
      <NavbarHeader />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path='/products' element={<ProductContainer />} />
      <Route exact path='/signin' element={<LogIn />} />
      <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
