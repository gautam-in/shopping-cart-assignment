import React ,{useEffect}from 'react'
import axios from 'axios'
import {Route,Switch} from 'react-router-dom'
import Signup from "./components/Signup/Signup"
import SignIn from "./components/SignIn/SignIn"
import Products from "./components/Products/Products"
import Home from "./components/Home/Home"
import "./App.css"
export default function App() {
    const options={
        mode: "cors",
        cache: "default",
        method: "GET",
        credentials: "same-origin",
      };
   
    return (
       <Switch>
           <Route path="/products" component={Products} exact/>

           <Route path="/" component={Home} exact/>
           <Route path="/register" component={Signup} exact/>
           <Route path="/login" component={SignIn} exact/>
       </Switch>
    )
}
