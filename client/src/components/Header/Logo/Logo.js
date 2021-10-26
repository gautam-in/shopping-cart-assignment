
import { Link } from "react-router-dom";
import "./logo.scss";
import logo from "../../../assets/images/sabkabazaar.png"


const Logo=()=>{
    return(
    <Link className="logo" to="/">
        <img src={logo} alt="Home"/>
    </Link>
    )
}

export default Logo