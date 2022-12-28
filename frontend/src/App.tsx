import Axios from "axios";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Products } from "./views/products";
import { Cart } from "./views/add-to-cart";
import { PrivateRoute } from "./HOC/private-route";

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
        <Route
          path="/products"
          element={<PrivateRoute component={Products} />}
        />
        <Route path="/cart" element={<PrivateRoute component={Cart} />} />
        <Route path="*" element={<Navigate to="/products"></Navigate>} />
      </Routes>
    </Router>
  );
}

export default App;
