import { Login } from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
