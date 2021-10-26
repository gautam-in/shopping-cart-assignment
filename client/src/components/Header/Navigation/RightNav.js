import { Link } from "react-router-dom"
import "./right-nav.scss"
import Cart from "../Cart/Cart"

const RightNav =(props)=>{
    return (
        <nav className="nav_rt">
        <ul className="nav_rt__list">
            <li>
                <Link to="/signin" className="nav_rt__link">
                    SignIn
                </Link>
            </li>
            <li >
                <Link to="/signup" className="nav_rt__link">
                    Register
                </Link>
            </li>
        </ul>
        <div className="cart">
            <Cart cartItems={props.cartItems} openCartWindow={props.openCartWindow}/>
        </div>
       
    </nav>
    )
}

export default RightNav