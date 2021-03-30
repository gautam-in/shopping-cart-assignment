import React from "react";

import { Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routes from "../../routes/Routes";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <div className="container">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
