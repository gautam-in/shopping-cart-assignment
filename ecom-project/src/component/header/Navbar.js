import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import "./navbar.css"
import { emptyData, logout } from '../../redux/action-constants';
const Navbar = ({handleCart}) => {
     const count=useSelector(state=>state.cartListData.count)
     const loginCheck=useSelector(state=>state.logoutToggle.logout)
     const dispatch=useDispatch()
     const[loginname,setLoginname]=useState({})
     
     useEffect(()=>{
        const ldata= localStorage.getItem("user");
        if(ldata){
          setLoginname(JSON.parse(ldata))
        }
      },[loginCheck])
    const handleCarts=()=>{
    handleCart()
    }
    const handleLogout=()=>{
        localStorage.clear("user")
        dispatch({type:logout})
        dispatch({type:emptyData})
    }
    return (
        <nav className='navbar'>
            <div className='navbar-link'>
                <div className='navbar-brand'>
                <img src={"/static/images/logo.png"} className="image-resp" />
                </div>
                <div className='navbar-items'>
                    <ul>
                        <li><Link class="active" to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </div>
            </div>
          <div className='navbar-cart'>
           <div className='navbar-login'>
           {!loginCheck?<ul>
                        <li><Link class="active" to="/login">Sign In</Link></li>
                        <li><Link to="/register">Register</Link></li>
            </ul>:<ul>
                        <li>{loginname.fname }</li>
                        <li><Link class="active" to="/login" onClick={handleLogout}>LogOut</Link></li>
            </ul>
           }
           </div>
           <div className='navbar-icon'>
               <div onClick={()=>handleCarts()}>
               <i className="fa fa-shopping-cart icon" ></i><span>{ count?count:0} Items</span>
               </div>
           
           </div>
           
          </div>
         
         
        </nav>
    );
}

export default Navbar;