import React from "react";
import react from "react";
import reactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// importing styles
import "./styles/main.css";
const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
