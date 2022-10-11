import "./App.css";
import "./custom.css";
import { Header } from "./components/header/Header.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Register from "./components/register/Register";
import SignIn from "./components/signin/SignIn";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
