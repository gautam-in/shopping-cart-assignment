import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainLayout from "./components/mainLayout/MainLayout";
import store from "./redux/Store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <MainLayout />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
