import "./Register.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/Reducers/RegisterSlice";


const Register=()=>{
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[passwordTwo,setPasswordTwo] = useState("");
    const [data,setData] =[{firstName:"",lastName:"",email:"",password:"",passwordTwo:""}]

    const dispatch = useDispatch();

    const settingData=(e)=>{
        e.preventDefault();
        if(password==passwordTwo)
        {
        const data ={
            firstName:firstName,lastName:lastName,email:email,password:password,register:true
        }
        dispatch(addUser(data));
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordTwo("");
        window.alert("user got created");
    }
    else
    {
    console.log("password do not match")
    }
    }

return(
    <>
       <NavigationBar />
    <div className="signBlock">
        <div className="loginLetter">
<h1 style={{fontSize: "32px"}}>Register</h1>
<p style={{fontSize: "13px", fontWeight:"500"}}>We do not share your personal details with anyone</p>
        </div>
        <form onSubmit={(e)=>settingData(e)} className="registerForm">
<input className="inputItems" required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
<input className="inputItems" value={lastName}  onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
<input className="inputItems" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} required placeholder="Email"/>
<input className="inputItems" type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
<input className="inputItems" type="password" value={passwordTwo}  onChange={(e) => setPasswordTwo(e.target.value)} placeholder="Confirm Password"/>
<button type="submit" className="submitButton">Signup</button>
        </form>
    </div>
    </>
)

}

export default Register;