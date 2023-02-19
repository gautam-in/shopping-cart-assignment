import axios from "axios";

export const getUserListAPI=async()=>{
    const res=await axios.get('/userList');
    return res.data;
}