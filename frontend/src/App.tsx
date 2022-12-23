import "./App.scss";
import Axios from "axios";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Products } from "./views/Products";
import { Categories } from "./views/Categories";
import Banners from "./views/Banners";

Axios.defaults.baseURL = process.env.REACT_APP_API;

Axios.interceptors.request.use((config) => {
  return config;
});
Axios.interceptors.response.use((config) => {
  return config;
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/banners" element={<Banners />} />
        <Route path="*" element={<Navigate to="/baners"></Navigate>} />
      </Routes>
    </Router>
  );
}

export default App;
