
import './NavigationBar.css';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector} from "react-redux";
import { setProductsCategory } from '../../Redux/Reducers/ProductSlice';
import logo from '../Images/logo.png'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { signOut } from '../../Redux/Reducers/RegisterSlice';

const NavigationBar=()=>{
  const[isVisible,setIsVisible] = useState(false)
  const dispatch = useDispatch();
  const data = useSelector(state=>state.cart.items);
  const currentUser= useSelector(state=>state.register.currentUser);
return(
<>{
  isVisible?
  <><Cart setIsCartVisible={setIsVisible}/>
  <div className='header'> 
<div className="topNav">
<div>
<img src={logo} alt="logo" height="60px" />
</div>
<div style={{display:"flex",marginLeft:"80px"}}>
<div>
<Link to="/"> 
          <button className="homeButton"
            onClick={() => {
            //   dispatch(setProductsCategory(category.id));
            }}
          >Home</button>
        </Link>
        </div>
        <div>
<Link to="/products"> 
          <button className="productButton"
            onClick={() => {
               dispatch(setProductsCategory(null));
            }}
          >Products</button>
        </Link>
        </div>
        </div>

</div>
<div style={{display:"flex",flexDirection:"column",marginRight:"80px"}}>
  {currentUser.authorized?<div >
<Link to="/login"> 
    <button onClick={dispatch(signOut())}  className="signIn">Sign Out</button>  </Link>
    </div>:
<div >
<Link to="/login"> 
    <button  className="signIn">Sign In</button>  </Link>
    <Link to="/register">    <button className="signIn">Register</button>    </Link>  
    </div>
}
    <div>
    <button
            onClick={() => ()=>{
              setIsVisible((prev)=>!prev);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              border: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ width: "24", fill: "#bb024d" }}
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {}
            {data.length} item(s)
          </button>
    </div>
    </div>
    </div>
  </>:

<div className='header'> 
<div className="topNav">
<div>
<img src={logo} alt="logo" height="60px" />
</div>
<div style={{display:"flex",marginLeft:"80px"}}>
<div>
<Link to="/"> 
          <button className="homeButton"
            onClick={() => {
            //   dispatch(setProductsCategory(category.id));
            }}
          >Home</button>
        </Link>
        </div>
        <div>
<Link to="/products"> 
          <button className="productButton"
            onClick={() => {
               dispatch(setProductsCategory(null));
            }}
          >Products</button>
        </Link>
        </div>
        </div>

</div>
<div style={{display:"flex",flexDirection:"column",marginRight:"80px"}}>
<div >
<Link to="/login"> 
    <button className="signIn">SignIn</button>  </Link>
    <Link to="/register">    <button className="signIn">Register</button>   </Link>   
    </div>
    <div>
    <button
            onClick={() => {
              setIsVisible(true);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              border: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ width: "24", fill: "#bb024d" }}
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {}
            {data.length} item(s)
          </button>
    </div>
    </div>
    </div>
}
</>
)

}


export default NavigationBar