import React ,{useEffect}from 'react'

import {Route,Switch} from 'react-router-dom'
import Signup from "./components/Signup/Signup"
import SignIn from "./components/SignIn/SignIn"
import Products from "./components/Products/Products"
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
import "./App.css"
export default function App() {
   
   
    return (
       <Switch>
          
           <Route path="/products" component={Products} exact/>
           <Route path="/" component={Home} exact/>
           <Route path="/cart" component={Cart} exact/>
           <Route path="/register" component={Signup} exact/>
           <Route path="/login" component={SignIn} exact/>
           <Route component={Home} exact/> {/*Route to home, if path doesn't exist */}
       </Switch>
    )
}
