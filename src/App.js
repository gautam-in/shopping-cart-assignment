//import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/home/home";
import Product from "./components/products/product";
import Cart from './components/cart/cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    //   <BrowserRouter>
    //   <Switch>
    //   <Route exact path="/" component={Login} />
    //   <Route path="/register" component={Register}/>
    //   </Switch>
    //   {/* <Routes>
    //     <Route path="/" element={<Login />} />
    //   </Routes> */}
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:pId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

    // <>
    //   <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/" element={<Login />} />
    //     {/* <Route path="/dashboard" element={<Dashboard />} />

    //     <Route path="/login" element={<Login />} /> */}
    //     {/* <Route path="/register" element={<Register />} /> */}
    //     {/* <Route path="/products" element={<Products {...props} />} /> */}
    //     {/* <Route
    //       path="*"
    //       element={
    //         <main style={{ padding: "1rem" }}>
    //           <p>There's nothing here!</p>
    //         </main>
    //       }
    //     /> */}
    //     </Switch>
    //   </BrowserRouter>

    //   {/* <Products/> */}
    //   {/* <Header/> */}
    //   {/* <Dashboard/> */}
    //   {/* <Register/> */}
    //   {/* <Login/> */}
    //   {/* <Footer/> */}
    // </>
  );
}

export default App;
