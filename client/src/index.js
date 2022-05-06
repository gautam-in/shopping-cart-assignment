import {
  BrowserRouter
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthState from "./store/Auth/State";
import CategoriesState from "./store/Categories/State";
import ProductsState from "./store/Products/State";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthState>
    <CategoriesState>
      <ProductsState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsState>
    </CategoriesState>
  </AuthState>
);
