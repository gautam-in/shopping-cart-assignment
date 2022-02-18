import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import CartPage from "./pages/CartPage/CartPage";
import Login from "./pages/SignIn/Login";
import SignUp from "./pages/SignUp/Signup";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundary";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <header className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </header>
    </ErrorBoundary>
  );
}

export default App;
