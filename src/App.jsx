import React, { Component } from "react";
import "./App.scss";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="shopping-site">
        <header>
          <Navbar />
        </header>
        <main></main>
      </div>
    );
  }
}

export default App;
