import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route, Routes } from 'react-router-dom'
import HeaderComponent from './Components/Header/Header.component';
import ProductsComponent from './Components/Products/Products.component';
import HomeComponent from './Components/Home/Home.component';
import CartComponent from './Components/Cart/Cart.component';
import RegisterComponent from './Components/Register/Register.component';
import LoginComponent from './Components/Login/Login.component';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path ="/products" element={<ProductsComponent/>}/>
        <Route path="/cart" element={<CartComponent/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path="/login" element={<LoginComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
