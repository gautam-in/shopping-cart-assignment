import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Header from './Components/Navbar/Header';
import Products from './Components/Products/Products';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
    <Header/>
    <Routes><Route path="/" element={<Home/>}/></Routes>
    <Routes><Route path="/products" element={<Products/>}/></Routes>
    <Routes><Route path="/signin" element={<SignIn/>}/></Routes>
    <Routes><Route path="/register" element={<Register/>}/></Routes>
    <Routes><Route path="/cart" element={<Cart/>}/></Routes>
<Footer/>
  
    
  </>
  );
}
export default App;
