import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./register/register.component";
import Home from "./home/home.component";
import "./app.scss";

const routes = [
  { path: "/login", element: <Register isFrom="login" /> },
  { path: "/register", element: <Register /> },
  { path: "/", element: <Home /> },
];

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={`key=${route.path}`}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
