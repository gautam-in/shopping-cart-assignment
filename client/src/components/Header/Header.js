import "./header.scss"
import LeftNav from "./Navigation/LeftNav"
import RightNav from "./Navigation/RightNav"

const Header =({cartItems, openCartWindow})=>{
    return(
        <header className="header">
            <div className="header__main">
               <LeftNav/>
               <RightNav cartItems={cartItems} openCartWindow={openCartWindow}/>
            </div>

        </header>
    )
}

export default Header