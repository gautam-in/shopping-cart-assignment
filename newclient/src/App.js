import "./App.css";
import Home from "./pages/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";
import MiniCart from "../src/pages/MiniCart.js";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const show = useSelector((state) => state.cardmodalstate.show);
  return (
    <Router>
      <Header />
      <div className="App">
        <div className="align-items-center flex-column textCenter">
          <Switch>
            <Router>
              <div>
                <Switch>
                  {routes.map(({ path, Component }, key) => (
                    <Route
                      exact
                      path={path}
                      key={key}
                      render={(props) => {
                        return (
                          <div className="p-8">
                            <Component {...props} />
                          </div>
                        );
                      }}
                    />
                  ))}
                </Switch>
                {show && <MiniCart />}
              </div>
            </Router>
          </Switch>
        </div>
      </div>
      <footer>
        <p id="copyright" className="copyright">
          Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies private ltd
        </p>
      </footer>
    </Router>
  );
}

export default App;
