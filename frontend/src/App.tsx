import Axios from "axios";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Products } from "./views/products";
import { Cart } from "./views/cart";
import { PrivateRoute } from "./HOC/private-route";
import { CART_PAGE, PRODUCT_PAGE } from "./constants/routes";

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
          path={PRODUCT_PAGE}
          element={<PrivateRoute component={Products} />}
        />
        <Route path={CART_PAGE} element={<Cart />} />
        <Route path="*" element={<Navigate to={PRODUCT_PAGE}></Navigate>} />
      </Routes>
    </Router>
  );
}

export default App;
