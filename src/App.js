import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="sabka-bazaar">
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/signin">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
