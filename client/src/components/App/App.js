import React, { useEffect, useRef } from "react";
import { Switch, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routes from "../../routes/Routes";

function App() {
  const contentRef = useRef();
  const location = useLocation();

  useEffect(() => {
    contentRef.current.scrollTop = 0;
  }, [location.pathname]);
  return (
    <div className="app-container">
      <Header />
      <main className="content" ref={contentRef}>
        <div className="container">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
