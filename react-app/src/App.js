import HomePage from "./components/layouts/homePage/homePage";
import SignupForm from "../src/authorization/signupForm/signupForm";
import LoginForm from "../src/authorization/loginForm/loginForm";
import HeaderLayout from "./components/common/header/headerLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signUp" element={<SignupForm />} />
      </Route>
    </Routes>
  );
}

export default App;
