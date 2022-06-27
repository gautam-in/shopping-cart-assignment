import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import  "../../styles/components/layout.scss"
import "../../styles/components/cart.scss"
import { useSelector } from "react-redux"


const Layout = ({children}) => {
    console.log("children is",children)
       return (<main>
        <Header />
        <div className="border_bottom_top"></div>
        {children}
        <div className="border_bottom_bottom"></div>
        <Footer />
    </main>)


}


export default Layout