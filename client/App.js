import React from "react";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <div className="containers">
        <Home />
      </div>
    </div>
  );
};

export default App;
