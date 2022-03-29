import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./register/register.component";
import Home from "./home/home.component";
import Navigation from "./navbar/navigation.component";
import Products from "./products/products.component";
import Footer from "./footer/footer.module";
import "./app.scss";

const routes = [
  { path: "/login", element: <Register isFrom="login" /> },
  { path: "/register", element: <Register /> },
  { path: "/products", element: <Products /> },
  { path: "/", element: <Home /> },
];

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {routes.map((route) => (
          <Route
            exact
            path={route.path}
            element={route.element}
            key={`key=${route.path}`}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
