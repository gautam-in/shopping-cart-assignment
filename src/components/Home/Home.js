import React from 'react'
import {useSelector} from 'react-redux'
import Cart from "../Cart/Cart"
import Backdrop from "../Backdrop/Backdrop"
import Navbar from "../Navbar/Navbar"
import Products from "./Products/Products"
export default function Home() {
    const show=useSelector(state=>state.showCart)
    return (
        <div>
              <Backdrop />
           {show&&<div  className="cart-align"><Cart/></div>}

         <Navbar/>
        <Products/>
        </div>
    )
}
