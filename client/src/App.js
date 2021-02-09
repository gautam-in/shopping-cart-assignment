import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,Switch  } from "react-router-dom"
import Login from './components/login/index';
import Register from './components/signUp/index'
import {IoMdCart} from "react-icons/io" 
import "./App.scss";
function App() { 
   
    return (
      <>
        <Router>
     <div className="header">
          <div>
                 <div className="logo">
                   <img src="./logo_2x.png"/>
                   </div>
                   <div className="navOptions">
                     <span>
                       
                       Home
                       </span>
                       <span>
                         Products
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
          <div className={"cartIcon"}>
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
        </Switch>
   
    <div className={"copyrightrow"}>
      Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
    </div>
    </Router>
    </>
    )
   
  }

export default App;