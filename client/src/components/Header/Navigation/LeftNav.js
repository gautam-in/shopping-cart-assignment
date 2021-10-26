import "./left-nav.scss"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
const LeftNav =()=>{
    return(
        <nav className="nav_lt">
        <Logo/>
        <ul className="nav_lt__list">
            <li>
                <Link to="/" className="nav_lt__link">
                    Home
                </Link>
            </li>
            <li >
                <Link to="/products" className="nav_lt__link">
                    Products
                </Link>
            </li>
        </ul>
    </nav>
    )
}

export default LeftNav