import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { store, persistedStore } from "./Redux/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const App = lazy(() => import("./App"));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Suspense
          fallback={
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                fontSize: "4rem",
              }}
            >
              Loading...
            </h1>
          }
        >
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
