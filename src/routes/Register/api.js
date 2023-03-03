import axios from "axios";

export const addUserAPI=async(userData)=>{
    const res=await axios.post('/userList',userData);
    return res.data;
}