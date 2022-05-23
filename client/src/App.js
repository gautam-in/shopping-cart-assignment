import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Login"></Redirect>
        </Route>

        <Route path="/Login">
          <Login></Login>
        </Route>

        <Route path="/Signup">
          <Signup></Signup>
        </Route>

        <Route path="/Home">
          <Home></Home>
        </Route>

        <Route path="/Products" exact>
          <Products></Products>
        </Route>

        <Route path="/Products/:productKey">
          <Products></Products>
        </Route>

        <Route path="/Cart">
          <Cart></Cart>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
