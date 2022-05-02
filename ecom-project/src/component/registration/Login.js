import React,{useState,useEffect} from 'react';
import{useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import{logout} from "./../../redux/action-constants"
import "./login.css";
const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[login,setLogin]=useState({
          email:'',
          password:'',
    })
   const[user,setUser]=useState({})
    useEffect(()=>{
      const ldata= localStorage.getItem("user");
      if(ldata){
        setUser(JSON.parse(ldata))
      }
    },[])
    const handleChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(user){
        if(login.email===user.email && login.password===user.password)
        {
            dispatch({type:logout})
            navigate("/")
        }else{
            navigate("/register") 
        }
    }else{
        alert("You haven't register yet, please signUp!!")
        // navigate("/register")  
    }
       
    }
    return (
        <>
            <section className='login-page'>
                <div className='login-info'>
                    <h1>Login</h1>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                    
                </div>
                <div className='login-form'>
                <form onSubmit={handleSubmit} className="log-form">

                    <div className="group log-input">
                        {/* <label for="email">Email</label> */}
                        <input type="email" id="email" name="email" onChange={(e)=>handleChange(e)} placeholder="Email" />
                    </div>

                    <div className="group log-input">
                    {/* <label for="password">Password</label> */}
                        <input type="password" id="password" name="password"  onChange={(e)=>handleChange(e)} placeholder="Passowrd" />
                    </div>

                        <div className="container-log-btn">
                            <button type="submit" name="btn_submit" className="log-form-btn">
                                <span>Login</span>
                            </button>
                        </div>

                    </form>

                 </div>

             </section>
                </>
                );
}

 export default Login;