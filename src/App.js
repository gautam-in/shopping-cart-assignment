import React ,{useEffect}from 'react'
import "./App.css"

import {Route,Switch} from 'react-router-dom'
const Signup=React.lazy(()=>import ('./components/Signup/Signup'))
const SignIn=React.lazy(()=>import ('./components/SignIn/SignIn'))
const Products=React.lazy(()=>import ('./components/Products/Products'))
const Home=React.lazy(()=>import ('./components/Home/Home'))
const Cart=React.lazy(()=>import ('./components/Cart/Cart'))

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
