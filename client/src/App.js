import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import Main from "./container/Main/main";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
