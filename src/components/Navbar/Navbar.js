import React from 'react'
import "./Navbar.css"
// import "./Nav.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import {useSelector,useDispatch} from "react-redux"
import * as actions from "../../store/actions/index"
import Logo from "../../../static/images/logo.png"
import {withRouter} from "react-router-dom"
 function Navbar(props) {
     const dispatch=useDispatch()
    const cartItems=useSelector(state=>state.cartItems)
    const show=useSelector(state=>state.showCart)
    debugger
    const countCartItems=()=>{
        const length=cartItems?.reduce((acc,item)=>item.count+acc,0)
        return length
    }
    return (
        <div>
            <nav className="main">
                <img className="img-style" src={Logo} alt="Sabka Bazaar" />
                <ul className="links">
                    <li key="1"> <Link to="/" className="item1">Home</Link></li>
                    <li key="2"><Link to="/products" className="item1">Products</Link></li></ul>
                <div className="container">
                <div className="divide1">
                    <div className="signin"><Link className="nocolor" to="/login">SignIn</Link></div>
                    <div className="register"><Link className="nocolor" to="/register">Register</Link></div>
                </div>
                {/* <div className="divide2" onClick={()=>props.history.push("/cart")}><FontAwesomeIcon icon={faShoppingCart}/>({countCartItems()}) Items</div> */}
                <div className="divide2" onClick={()=>dispatch(actions.showCart(!show))}><FontAwesomeIcon icon={faShoppingCart}/>({countCartItems()}) Items</div>

                    </div>  
        

            </nav>
            <div className="line"></div></div>

    )
}
export default withRouter(Navbar)