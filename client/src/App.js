import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "Pages/Login/Login";
import Register from "Pages/Register/Register";
import Home from "Pages/Home/Home"
import NotFound from "Components/NotFound/NotFound";
import Products from "Pages/Products/Products"
import CategoryProvider from "Context/CategoryContext";
import AddToCartProvider from "Context/AddCartContext";
import Cart from "Components/Cart/Cart"
import RequireAuth from "Helper/AuthComponent";
import Test from "Pages/Test/Test"

function App() {
  return (
    <CategoryProvider>
      <AddToCartProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Products}/>
            <Route exact path="/cart" render={(props) => <RequireAuth Component={Cart} {...props} />} />
            <Route exact path="/test" render={(props) => <RequireAuth Component={Test} {...props} />} />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        </Router>
      </AddToCartProvider>
    </CategoryProvider>
  );
}

export default App;