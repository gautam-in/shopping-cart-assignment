import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Listing from "./pages/Listing/Listing";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Resigter/Register";
import SignIn from "./pages/SignIn/SignIn";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

export default function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="container content">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route exact path="/listing" component={Listing} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </Provider>
  );
}
