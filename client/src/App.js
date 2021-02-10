import React, {useState, Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route,Switch  } from "react-router-dom"
import Login from './components/login/index';
import Register from './components/signUp/index'
import {IoMdCart} from "react-icons/io" 
import Product from "./components/productList/index"
import Home from "./components/home/home"
import Cart from "./components/cart/cart"
import "./App.scss";
function App() { 
         const [cart,setCart]=useState(false);
    return (
      <>
        <Router>
     <div className="header">
       {cart&&<Cart setCart={setCart}/>}
          <div>
                 <div className="logo">
                   <img src="./logo_2x.png"/>
                   </div>
                   <div className="navOptions">
                     <span>
                     <Link to="/home">
                       Home
                       </Link>
                       </span>
                       <span>
                       <Link to="/products">
        Products
       </Link>
                       </span>
                     </div>
          </div>
          <div>

      <div className={"cartLogoContainer"}>
        <div className={"text"}> 
         <span>
           <Link to="/login">
         SignIn
       </Link>
           </span>
           
           <span >
           <Link to="/register">
           Register
           </Link>
          
             </span>  
          </div>
          <div onClick={()=>setCart(true)} className={"cartIcon"}>
           <div>
           <IoMdCart style={{color: "#fd032f",fontSize:"2.5rem"}}/>
             </div> 
              <div>
               0 items
              </div>
          </div> 
        </div>
      
</div>
       </div>
    
        <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path ="/products" component={Product}/>
        <Route exact path ="/home" component={Home}/>
        <Route  path="/" >
          <Redirect to="/home" />
          </Route>
        </Switch>
   
    <div className={"copyrightrow"}>
      Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
    </div>
    </Router>
    </>
    )
   
  }

export default App;