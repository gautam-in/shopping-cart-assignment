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

 return(
  <>
  <BrowserRouter>
  <Header toggle={backdroptoggle}/>
      <Routes>
        <Route exact path="/" element={category.length>0 && <Home category={category}/>}/>
        <Route exact path="/productInfo" element={category.length>0 && <ProductInfo categories={category}/>}/>
      </Routes>
  </BrowserRouter>
  <SideDrawer open={drawer.showbd} close={backdroptoggle} products={cartProducts}/>
  </>
 )
}

export default App;
