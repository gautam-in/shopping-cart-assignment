import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import Cart from "../cart-component/cart.component";
import "./header.styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { MyContext } from "../../App";
import { withRouter } from "react-router-dom";

const Header = ({
  history,
}) => {
  const cart=useContext(MyContext);
 const{cartShow,setCartShow}=cart;
  const [cartClick, setCartClick] = useState(false);
  
  return (
    <div className="header">
      <div className="nav-left">
        <img src="/static/images/logo_2x.png" onClick={() =>{history.push('/')} } alt="sabka bazar icon"></img>
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/products">Products</Link>
      </div>

      <div className="nav-right">
        <div className="nav-right-sign">
            <Link className="nav-item" to="/signin">SignIn</Link>
            <Link className="nav-item" to="/signup">Register</Link>
        </div>
        <Link className="nav-item cart" onClick={(e) => setCartClick(true)}>
          <FontAwesomeIcon icon={faCartShopping}  />
          
          <span>{cart.cartItems.length }</span>
          {console.log(`from header${cart.cartItems.length}`)}
        </Link>
        {cartClick ? 
           <Cart setCartClick={setCartClick} />
            : null}
      </div>
    </div>
  );
};

export default withRouter(Header);
