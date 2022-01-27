import "./App.scss";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Categories } from "./containers/Categories";
import { Products } from "./containers/Products";
import { Registration } from "./containers/RegistrationPage";
import { SignIn } from "./containers/Signin/Signin";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Categories />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/register" element={<Registration />}></Route>

        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
      <footer>CopyRight 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</footer>
    </div>
  );
}

export default App;
