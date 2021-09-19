import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";


export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
