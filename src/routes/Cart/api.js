import axios from "axios";

export const fetchCartItems=async(userId)=>{
    const res=await axios.get(`/userList/${userId}`);
    return res.data;
}