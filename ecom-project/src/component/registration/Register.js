import React,{useEffect, useState} from 'react';
import{useNavigate} from "react-router-dom"
import "./login.css"

const Register=(props)=> {
    const navigate=useNavigate()
    const[signup,setSignup]=useState({
          fname:'',
          lname:'',
          email:'',
          password:'',
          cpassword:''
    })
    useEffect(()=>{
      setSignup({fname:'',
      lname:'',
      email:'',
      password:'',
      cpassword:''})
    },[])
    const handleChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        localStorage.setItem("user",JSON.stringify(signup))
        navigate('/login')
        console.log("signup",signup)
    }
    
    return (
        <>
            <section className='login-page'>
            <div className='login-info'>
                    <h1>Signup</h1>
                    <p>We don't share your personal detail with anyone</p>
                    
                </div>
                <div className='login-form'>

                <form  onSubmit={handleSubmit} className="log-form">

                    <div className="group log-input">
                        <input type="text" id="firstname" name="fname" onChange={(e)=>handleChange(e)} placeholder="FirstName" />
                    </div>
                    <div className="group log-input">
                        <input type="text" id="lastname" name="lname" onChange={(e)=>handleChange(e)} placeholder="LastName" />
                    </div>
                    <div className="group log-input">
                        <input type="email" id="email" name="email" onChange={(e)=>handleChange(e)} placeholder="Email" />
                    </div>
                    <div className="group log-input">
                        <input type="password" id="password" name="password" onChange={(e)=>handleChange(e)} placeholder="Password" />
                    </div>
                    <div className="group log-input">
                        <input type="password" id="cpassword" name="cpassword" onChange={(e)=>handleChange(e)} placeholder="Confirm Password" />
                    </div>

                        <div className="container-log-btn">
                            <button type="submit" name="btn_submit" onChange={(e)=>handleChange(e)} className="log-form-btn">
                                <span>SignUp</span>
                            </button>
                        </div>

                    </form>

                </div>

             </section>
                </>
    );
}

export default Register;