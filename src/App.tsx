import React from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouting from "./routing";
import "./styles/index.scss";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout className="app-wrapper">
        <Header />
        <AppRouting />
        <Footer />
      </Layout>
      ,
    </BrowserRouter>
  );
}

export default App;
