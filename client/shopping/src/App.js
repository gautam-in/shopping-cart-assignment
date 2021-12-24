import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import ProductInfo from './components/PIP/ProductInfo';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import SideDrawer from './components/Sidedrawer/Sidedrawer';
import SignIn from './components/UserActions/SignIn/SignIn';
import Register from './components/UserActions/Register/Register';
import Footer from './components/Footer/Footer';

function App() {
  const [drawer, setState] =  useState({showbd:false})
  const [cartProducts, setProducts] =  useState({});
  const [category, setCategory]= useState([]);

  useEffect(()=>{ fetch("/categories").then((dta)=> dta.json()).then((dta)=>{
    setCategory(dta);
    })
  },[]);

  let backdroptoggle=()=>{
    setState((prevState)=>
    {
            return({showbd:!prevState.showbd})
            
            }
       )
    }
  let setProdQty = (data)=>{
    let prodQty = cartProducts;
    if(data.qty>0)
    {
      prodQty[data.key].qty = data.qty;
    }
    else{
      const { [data.key]:removed, ...dataRest } = cartProducts;
      prodQty = dataRest
    }
    setProducts({...prodQty})
  }

 return(
  <>
  <BrowserRouter>
  <Header toggle={backdroptoggle} cartProducts = {cartProducts}/>
      <Routes>
        <Route exact path="/" element={category.length>0 && <Home category={category}/>}/>
        <Route exact path="/productInfo" element={category.length>0 && <ProductInfo categories={category} addToCart={setProducts} products={cartProducts}/>}/>
        <Route exact path="/signin" element={<SignIn/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    <Footer/>
  </BrowserRouter>
  <SideDrawer open={drawer.showbd} close={backdroptoggle} products={cartProducts} setQty={setProdQty}/>
  </>
 )
}

export default App;
