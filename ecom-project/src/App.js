import React,{useState} from "react"
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Home from './component/home/Home';
import Navbar  from './component/header/Navbar';
import Login from "./component/registration/Login";
import Register from "./component/registration/Register";
import ProductList from "./component/product/ProductList";
import Cart from "./component/Cart/Cart";
import PageNotFound from "./component/pagenotfound/PageNotFound"
import {useDispatch, useSelector} from "react-redux"


function App() {
  const[toggle,setToggle]=useState(false)
  const handleCart=()=>{
  setToggle(!toggle)
  }
  const handleModal=()=>{
      setToggle(false)
  }
  return (
     <div className={toggle?"main":""}> 
     {toggle?  <div className="first">
        <Cart handleModal={handleModal} />
       </div>:""
      }
    <main className="mainlist">
      <header className="navigation">
      <Navbar handleCart={handleCart} />
      </header>
     
    
      <article>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/*" element={<ProductList />} />
        <Route path="product/*" element={<Product />} />
        <Route path="login/*" element={<Login />} />
        <Route path="register/*" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </article>
      </main>
      </div>
 )
}
function Product() {
  return (
    <div>
      <Routes>
        <Route path=":id" element={<ProductList />} />
      </Routes>
    </div>
  );
}


export default App;
