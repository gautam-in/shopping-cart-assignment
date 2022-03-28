import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="sabka-bazaar">
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
