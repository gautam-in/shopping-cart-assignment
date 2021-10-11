import MainRouter from "navigation/mainRouter";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <MainRouter />
      </Router>
    </React.Fragment>
  );
}

export default App;
