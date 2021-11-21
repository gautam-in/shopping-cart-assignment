import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route, Routes } from 'react-router-dom'
import HeaderComponent from './Components/Header/Header.component';
import ProductsComponent from './Components/Products/Products.component';
import HomeComponent from './Components/Home/Home.component';
import CartComponent from './Components/Cart/Cart.component';
import RegisterComponent from './Components/Register/Register.component';
import LoginComponent from './Components/Login/Login.component';
import FooterComponent from './Components/Footer/Footer.component';
import Modal from './Components/Cart/modal';
function App(props) {
  console.log(props)
  return (
    <div className="App">
      <HeaderComponent {...props}/>
      <Modal {...props}/>
      <Routes> 
        <Route path="/" element={<HomeComponent/>}/>
        
        <Route exact path ="/products" element={<ProductsComponent {...props}/>}>
          <Route exact path ="/products/:id" element={<ProductsComponent {...props}/>}/>
        </Route>
        <Route path="/cart" element={<CartComponent {...props}/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path="/login" element={<LoginComponent/>} />
      </Routes>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
