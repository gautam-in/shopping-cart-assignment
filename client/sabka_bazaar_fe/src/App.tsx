import Header from "components/header/header";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.scss";
import RouterComponent from "navigation/routerComponent";
import { UseLoginStatus } from "utils/authHelper";
import { AuthContext } from "context/authContext";
import { LocalStorage } from "services/storage";

function App(): React.ReactElement {
  let userAuth = UseLoginStatus();
  let userContextValue = {
    userAuthentication: userAuth.userAuthentication,
    toggleUserAuthentication: userAuth.updateUserAuthentication
  };

  useEffect(() => {
    LocalStorage.setStorage("status", "");
  });

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={userContextValue}>
          <Header />
          <RouterComponent />
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
