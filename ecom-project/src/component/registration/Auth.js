import React,{useContext} from "react"

const Auth=()=>{
    const ldata= localStorage.getItem("user");
    return useContext(ldata?ldata:null)
}
export default Auth;