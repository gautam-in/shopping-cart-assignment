import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="sabka-bazaar">
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
