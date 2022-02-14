import "./App.css";
import Header from "./components/header/Header.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import CustomButton from "./components/custom-button/custom-buttom.component";
import SignIn from "./components/sign-in/sign-in.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SignIn />
      </Router>
    </div>
  );
}

export default App;
