import React, { Component } from "react";
import "./App.scss";
import Login from "./components/Login";

import Navbar from "./components/Navbar";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div className="shopping-site">
        <header>
          <Navbar />
        </header>
        <main>
          <Login />
          {/* <Register /> */}
        </main>
      </div>
    );
  }
}

export default App;
