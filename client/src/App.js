import "./App.css";
import Header from "./components/header/Header.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import CustomButton from "./components/custom-button/custom-buttom.component";
import SignIn from "./components/sign-in/sign-in.component";
import Login from "./Page/login/login.pages";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Login />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
