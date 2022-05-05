import {
  BrowserRouter
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthState from "./store/Auth/State";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthState>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthState>
);
