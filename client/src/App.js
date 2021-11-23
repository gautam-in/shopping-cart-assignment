import { Login } from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
