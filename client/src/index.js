import "./wdyr";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthState from "./store/Auth/State";
import CarouselState from "./store/Carousel/State";
import CategoriesState from "./store/Categories/State";
import ProductsState from "./store/Products/State";
import CartState from "./store/Cart/State";
import ErrorBoundaryComponent from "./components/ErrorBoundary/ErrorBoundary";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";

axios.defaults.baseURL = process.env.REACI_APP_API_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary FallbackComponent={ErrorBoundaryComponent} onReset={() => {}}>
    <HelmetProvider>
      <BrowserRouter>
        <AuthState>
          <CarouselState>
            <CategoriesState>
              <ProductsState>
                <CartState>
                  <App />
                </CartState>
              </ProductsState>
            </CategoriesState>
          </CarouselState>
        </AuthState>
      </BrowserRouter>
    </HelmetProvider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.register();
