import "./Sign.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { checkForUser } from "../../Redux/Reducers/RegisterSlice";


const Sign=()=>{
    const dispatch = useDispatch();
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const data =useSelector(state=>state.register.currentUser)


    const checkUser=(e)=>{
        e.preventDefault();
        const user={
            email:email,
            password:password
        }
        dispatch(checkForUser(user));
        // if(!data.authorized)
        // {
        //     window.alert("Please Register")
        // }
    }



return(
    <>
       <NavigationBar />
    <div className="signBlock">
        <div className="loginLetter">
<h1 style={{fontSize: "32px"}}>Login</h1>
<p style={{fontSize: "13px", fontWeight:"500"}}>Get access to your orders, Wishlist and Recommendations</p>
        </div>
        <form onSubmit={(e)=>checkUser(e)} className="loginForm">
<input className="inputItem" onChange={(e) => setEmail(e.target.value)}  placeholder="Email"/>
<input className="inputItem" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
<button type="submit" className="submitButton">Submit</button>
        </form>
    </div>
    </>
)

}

export default Sign;