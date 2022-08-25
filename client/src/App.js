import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login'
import Home from './components/Home';
import Register from './components/Register';
import Products from './components/Products';
import CartProvider from './store/CartProvider';
import Cart from "./components/Cart"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <CartProvider>
    <div className="App">
      <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
		    <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products">
          <Route index element={<Products />} />   
          <Route path=":categoryId" element={<Products />} /> 
        </Route>
        </Routes>
      <Footer />
      </Router>
      
    </div>
    </CartProvider>
  );
}

export default App;
