
import './App.css';
import react,{useEffect} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import axios from 'axios'
import Home from './Pages/Home/Home';
import Header from '..//src/Components/header/Header'
import Footer from './Components/footer/Footer';
import Products from './Pages/products/Products';
import { useSelector } from 'react-redux';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register/Register';

function App() {
  return (
    <div className="App">   
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/products' element={<Products/>}>
            <Route path=':id' element={<Products/>}/> 
          </Route>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
