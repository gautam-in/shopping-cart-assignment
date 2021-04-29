import React from "react";
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import { HashRouter as Router } from "react-router-dom";
import CopyRights from "@reusableComponents/CopyRights/CopyRights";

const App: any = () => {
  return (
    <Router>
      <Header />
      <MainContainer />
      <CopyRights />
    </Router>
  );
};

export default App;
