import Footer from "components/molecules/footer/footer";
import Header from "components/molecules/header/header";
import RouterComponent from "navigation/routerComponent";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

function App(): React.ReactElement {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main-content">
          <RouterComponent />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
