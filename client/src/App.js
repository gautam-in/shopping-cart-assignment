import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainLayout from "./components/mainLayout/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
