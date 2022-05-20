import "./App.css";
// import Products from "./components/products/products-list.component";
import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signIn-component";
import Register from "./routes/Register/register-component";

const Shop = () => {
  return <h1>I'm Shop of Products</h1>;
};
function App() {
  return (
    <div className="App">
      {/* <div className="products">
        <Products /> 
       
      </div>*/}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
