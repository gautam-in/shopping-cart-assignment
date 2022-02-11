import Routes from "./routing";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./store/cartProvider";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes />
      </Router>
    </CartProvider>
  );
}

export default App;
