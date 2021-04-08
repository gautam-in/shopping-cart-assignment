import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/main.scss";

import { Provider } from "react-redux";
import Store from "./redux/Store";
import App from "./containers/App/App";

function Index() {
  return (
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("app"));
