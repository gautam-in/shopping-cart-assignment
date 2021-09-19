import { Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home/Home"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/products"
              render={(props) => <ProductPage {...props} />}
            />

            <Route
              exact
              path="/register"
              render={(props) => <RegisterPage {...props} />}
            />
            <Route
              exact
              path="/signin"
              render={(props) => <SignInPage {...props} />}
            />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
