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
    useEffect(()=>{
        axios.get('http://localhost:5000/banners')
       
    },[])
    return (
       <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/register" component={Signup} exact/>
           <Route path="/login" component={SignIn} exact/>
           <Route path="/products" component={Products} exact/>
       </Switch>
    )
}
